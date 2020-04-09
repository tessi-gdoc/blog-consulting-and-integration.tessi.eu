import React from 'react';
import { graphql } from 'gatsby';
import path from 'ramda/src/path';

import DocTemplate from '@components/DocTemplate';
import Container from '@components/Container';
import useTranslations from '@hooks/use-translations';

const Webinars = ({
  data: {
    allMarkdownRemark: { edges: webinars }
  }
}) => {
  const [{ watchWebinar }] = useTranslations();
  return (
    <Container>
      {webinars.map(({ node: { frontmatter, id, html } }) => (
        <DocTemplate
          key={id}
          title={frontmatter.title}
          content={html}
          imageData={path(['childImageSharp', 'fluid'], frontmatter.image)}
          imageAlt={frontmatter.imageAlt}
          cta={{ link: frontmatter.link, text: watchWebinar }}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query Webinars($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { key: { eq: "webinar" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 450, traceSVG: { color: "#1a214d" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            imageAlt
            title
            link
          }
        }
      }
    }
  }
`;

export default Webinars;
