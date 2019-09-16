import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import useTranslations from '@hooks/use-translations';
import Flex, { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import HTML from '@components/HTML';
import { Tablet } from '@media';
import { secondary } from '@colors';

const webformId = process.env.GATSBY_PLEZI_DEMO_ID,
  formId = process.env.GATSBY_PLEZI_DEMO_FORM_ID,
  tenantId = process.env.GATSBY_PLEZI_TENANT_ID;

const Form = styled.form`
  .jsonform-error-where_are_you_based,
  .jsonform-error-what_is_the_time_frame_you_have_for_planning_your_project {
    & > .controls {
      display: inline-block;
      position: relative;
      width: 100%;
      vertical-align: top;
      &:after {
        border: 3px solid ${secondary};
        border-radius: 2px;
        border-right: 0px;
        border-top: 0px;
        content: ' ';
        display: block;
        height: 0.625em;
        margin-top: -0.375em;
        pointer-events: none;
        position: absolute;
        top: 50%;
        right: 1.125em;
        transform: rotate(-45deg);
        transform-origin: center;
        width: 0.625em;
        z-index: 4;
      }
      & > select {
        appearance: none;
        width: 100%;
        outline: none;
      }
    }
  }
`;

const Demo = ({
  data: {
    partners: { edges }
  }
}) => {
  const [t] = useTranslations();
  const {
    partners,
    demoPage: { title, rightContent, leftContent }
  } = t;
  React.useEffect(() => {
    const script = document.createElement('script');
    script.id = webformId;
    script.src = `https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${formId}&form_version=3&content_web_form_id=${webformId}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const script = document.getElementById(webformId);
      if (script !== null) document.body.removeChild(script);
    };
  }, []);
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
        <FlexItem width="50%">
          <HTML markdown={leftContent} />
          <h2>{partners}</h2>
          <Flex justify="space-around">
            {edges.map(({ node }) => (
              <Img
                key={node.id}
                fluid={node.childImageSharp.fluid}
                alt={node.name}
                css={{ width: 160 }}
              />
            ))}
          </Flex>
        </FlexItem>
        <FlexItem width="50%">
          <HTML markdown={rightContent} />
          <Form id={`foss-${webformId}`}></Form>
        </FlexItem>
      </Flex>
    </Container>
  );
};

export const pageQuery = graphql`
  query {
    partners: allFile(
      filter: { name: { regex: "/^partner[0-9]+$/" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            fluid(maxWidth: 160, traceSVG: { color: "#1a214d" }) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Demo;
