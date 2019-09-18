import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useTranslations from '@hooks/use-translations';
import Flex, { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import PleziForm from '@components/PleziForm';
import HTML from '@components/HTML';
import { secondary } from '@colors';
import { Tablet } from '@media';

const webformId = process.env.GATSBY_PLEZI_DEMO_ID,
  formId = process.env.GATSBY_PLEZI_DEMO_FORM_ID,
  tenantId = process.env.GATSBY_PLEZI_TENANT_ID;

const formStyles = css`
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

const Subtitle = styled.span`
  color: ${secondary};
`;

const Demo = ({
  data: {
    partners: { edges }
  }
}) => {
  const [t] = useTranslations();
  const {
    partners,
    demoPage: { title, subtitle, rightContent, leftContent }
  } = t;
  return (
    <Container>
      <h1
        css={css`
          font-size: 1.75rem;
          text-transform: uppercase;
          ${Tablet} {
            font-size: 2.45rem;
          }
        `}
      >
        {title} <Subtitle>{subtitle}</Subtitle>
      </h1>
      <Flex align="start">
        <FlexItem width="50%">
          <HTML markdown={leftContent} />
          <h2>{partners}</h2>
          <Flex justify="space-around">
            {edges.map(({ node: { publicURL, name, id } }) => (
              <img
                key={id}
                src={publicURL}
                alt={name}
                css={{
                  width: 100,
                  height: 75,
                  [Tablet]: {
                    width: 160,
                    height: 110
                  }
                }}
              />
            ))}
          </Flex>
        </FlexItem>
        <FlexItem width="50%">
          <HTML markdown={rightContent} css={{ textAlign: `center` }} />
          <PleziForm
            webformId={webformId}
            formId={formId}
            tenantId={tenantId}
            css={formStyles}
          />
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
          publicURL
        }
      }
    }
  }
`;

export default Demo;
