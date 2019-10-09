import React from 'react';
import { graphql } from 'gatsby';
import path from 'ramda/src/path';

import DocTemplate from '@components/DocTemplate';
import Container from '@components/Container';

const Kits = ({
  data: {
    allMarkdownRemark: { edges: kits }
  }
}) => (
  <>
    <Container>
      {kits.map(({ node: { id, frontmatter, html } }) => (
        <DocTemplate
          key={id}
          title={frontmatter.title}
          content={html}
          imageData={path(['childImageSharp', 'fluid'], frontmatter.image)}
          cta={{
            link: frontmatter.link,
            text: `Télécharger le kit`
          }}
        />
      ))}
    </Container>
  </>
);

export const query = graphql`
  query Kits($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { slug: { regex: "/^(/kits/)/" }, locale: { eq: $locale } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 400, traceSVG: { color: "#1a214d" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            title
            link
          }
        }
      }
    }
  }
`;

export default Kits;
