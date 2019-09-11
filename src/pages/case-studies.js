import React from 'react';
import { graphql } from 'gatsby';

import DocTemplate from '@components/DocTemplate';
import Container from '@components/Container';
import useTranslations from '@hooks/use-translations';

const CaseStudies = ({
  data: {
    site: {
      siteMetadata: { officialWebsite }
    },
    allMarkdownRemark: { edges: caseStudies }
  }
}) => {
  const [{ readCaseStudy }] = useTranslations();
  return (
    <>
      <Container>
        {caseStudies.map(({ node: { frontmatter, id, html } }) => (
          <DocTemplate
            key={id}
            title={frontmatter.title}
            content={html}
            imageData={frontmatter.image.childImageSharp.fluid}
            cta={{
              link: `${officialWebsite}${frontmatter.link}`,
              text: readCaseStudy
            }}
          />
        ))}
      </Container>
    </>
  );
};

export const query = graphql`
  query CaseStudies($locale: String!) {
    site {
      siteMetadata {
        officialWebsite
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: {
          slug: { regex: "/^(/case-studies/)/" }
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
                fluid(maxWidth: 400) {
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

export default CaseStudies;
