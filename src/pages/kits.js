import React from 'react';
import { graphql } from 'gatsby';
import path from 'ramda/src/path';

import DocTemplate from '@components/DocTemplate';
import Container from '@components/Container';
import useTranslations from '@hooks/use-translations';

const Kits = ({
  data: {
    allMarkdownRemark: { edges: kits }
  }
}) => {
  const [{ downloadKit }] = useTranslations();
  return (
    <Container>
      {kits.map(({ node: { id, frontmatter, html } }) => (
        <DocTemplate
          key={id}
          title={frontmatter.title}
          content={html}
          imageData={path(['childImageSharp', 'fluid'], frontmatter.image)}
          imageAlt={frontmatter.imageAlt}
          cta={{ link: frontmatter.link, text: downloadKit }}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query Kits($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { key: { eq: "kit" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      edges {
        node {
          ...Doc
        }
      }
    }
  }
`;

export default Kits;
