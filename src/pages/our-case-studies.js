import React from 'react';
import { graphql } from 'gatsby';
import path from 'ramda/src/path';

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
    <Container>
      {caseStudies.map(({ node: { frontmatter, id, html } }) => (
        <DocTemplate
          key={id}
          title={frontmatter.title}
          content={html}
          imageData={path(['childImageSharp', 'fluid'], frontmatter.image)}
          imageAlt={frontmatter.imageAlt}
          cta={{
            link: `${officialWebsite}${frontmatter.link}`,
            text: readCaseStudy
          }}
        />
      ))}
    </Container>
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
        frontmatter: { key: { eq: "case-study" } }
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

export default CaseStudies;
