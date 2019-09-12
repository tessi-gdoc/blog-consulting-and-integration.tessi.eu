import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

import useTranslations from '@hooks/use-translations';
import Flex, { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import HTML from '@components/HTML';
import { Tablet } from '@media';

const webformId = process.env.GATSBY_PLEZI_DEMO_ID;

const Demo = ({
  data: {
    file,
    partners: { edges }
  }
}) => {
  const [t] = useTranslations();
  const {
    partners,
    demoPage: { title, content }
  } = t;
  return (
    <Container>
      <h2
        css={css`
          text-transform: uppercase;
        `}
      >
        {title}
      </h2>
      <Flex align="start">
        <FlexItem width="40%">
          <HTML markdown={content[0]} />
          <Img fluid={file.childImageSharp.fluid} alt="newsletter" />
          <HTML markdown={content[1]} />
        </FlexItem>
        <FlexItem width="60%">
          <form id={`foss-${webformId}`}></form>
        </FlexItem>
      </Flex>
      <h2>{partners}</h2>
      <Flex justify="space-between">
        {edges.map(({ node }) => (
          <Img
            key={node.id}
            fluid={node.childImageSharp.fluid}
            alt={node.name}
            css={{ width: 70, [Tablet]: { width: 140 } }}
          />
        ))}
      </Flex>
    </Container>
  );
};

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "form.png" }) {
      childImageSharp {
        fluid(maxWidth: 975, traceSVG: { color: "#1a214d" }) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    partners: allFile(
      filter: { name: { regex: "/^partner[0-9]+$/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 140, traceSVG: { color: "#1a214d" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Demo;
