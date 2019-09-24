import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useTranslations from '@hooks/use-translations';
import Flex, { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import PleziForm, { customSelect } from '@components/PleziForm';
import HTML from '@components/HTML';
import { secondary } from '@colors';
import { Tablet } from '@media';

const webformId = process.env.GATSBY_PLEZI_DEMO_ID,
  formId = process.env.GATSBY_PLEZI_DEMO_FORM_ID,
  tenantId = process.env.GATSBY_PLEZI_TENANT_ID;

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
      <Flex
        align="start"
        css={css`
          & p:first-child {
            text-align: center;
          }
          ${Tablet} {
            & p:first-child {
              padding-bottom: 1.5rem;
            }
            & > div:first-child {
              padding-right: 2rem;
              & p:nth-child(2) {
                padding-bottom: 1.5rem;
              }
            }
            & > div:last-child {
              padding-left: 2rem;
            }
          }
        `}
      >
        <FlexItem width="50%">
          <HTML markdown={leftContent} />
        </FlexItem>
        <FlexItem width="50%">
          <HTML markdown={rightContent} />
          <PleziForm
            webformId={webformId}
            formId={formId}
            tenantId={tenantId}
            css={css`
              div.jsonform-error-where_are_you_based,
              div.jsonform-error-what_is_the_time_frame_you_have_for_planning_your_project {
                ${customSelect};
              }
            `}
          />
        </FlexItem>
      </Flex>
      <h2>{partners}</h2>
      <Flex justify="space-around">
        {edges.map(({ node: { publicURL, name, id } }) => (
          <img
            key={id}
            src={publicURL}
            alt={name}
            css={{ width: 120, height: 120 }}
          />
        ))}
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
