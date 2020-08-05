import React from 'react';
import { graphql } from 'gatsby';
import path from 'ramda/src/path';

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
    <Container>
      {whitepapers.map(({ node: { frontmatter, id, html } }) => (
        <DocTemplate
          key={id}
          title={frontmatter.title}
          content={html}
          imageData={path(['childImageSharp', 'fluid'], frontmatter.image)}
          imageAlt={frontmatter.imageAlt}
          cta={{ link: frontmatter.link, text: downloadWhitepaper }}
        />
      ))}
    </Container>
  );
};

export const query = graphql`
  query Whitepapers($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { key: { eq: "whitepaper" } }
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

export default Whitepapers;
