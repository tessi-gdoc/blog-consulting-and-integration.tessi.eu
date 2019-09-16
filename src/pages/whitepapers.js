import React from 'react';
import { graphql } from 'gatsby';

import DocTemplate from '@components/DocTemplate';
import Container from '@components/Container';
import useTranslations from '@hooks/use-translations';

const Whitepapers = ({
  data: {
    allMarkdownRemark: { edges: whitepapers }
  }
}) => {
  const [{ downloadWhitepaper }] = useTranslations();
  return (
    <>
      <Container>
        {whitepapers.map(({ node: { frontmatter, id, html } }) => (
          <DocTemplate
            key={id}
            title={frontmatter.title}
            content={html}
            imageData={frontmatter.image.childImageSharp.fluid}
            cta={{
              link: frontmatter.link,
              text: downloadWhitepaper
            }}
          />
        ))}
      </Container>
    </>
  );
};

export const query = graphql`
  query Whitepapers($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: {
          slug: { regex: "/^(/whitepapers/)/" }
          locale: { eq: $locale }
        }
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

export default Whitepapers;
