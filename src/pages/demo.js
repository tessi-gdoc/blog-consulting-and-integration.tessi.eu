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

const Img = styled.img`
  &:first-of-type {
    width: 150px;
  }
  width: 90px;
  height: 90px;
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
        key="title"
        css={css`
          font-size: 1.75rem;
          text-align: center;
          @supports (-webkit-background-clip: text) {
            background-image: linear-gradient(
              to right,
              #3e6aae 0%,
              #447dbc 20%,
              #86589d 40%,
              #df6584 80%,
              #e58b90 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          ${Tablet} {
            font-size: 2.45rem;
          }
        `}
      >
        {title} <Subtitle key="subtitle">{subtitle}</Subtitle>
      </h1>
      <Flex
        key="container"
        align="start"
        css={css`
          & p:first-of-type {
            text-align: center;
          }
          ${Tablet} {
            & p:first-of-type {
              padding-bottom: 1.5rem;
            }
            & > div:first-of-type {
              padding-right: 2rem;
              & p:nth-of-type(2) {
                padding-bottom: 1.5rem;
              }
            }
            & > div:last-of-type {
              padding-left: 2rem;
            }
          }
        `}
      >
        <FlexItem key="left_content" width="50%">
          <HTML markdown={leftContent} />
        </FlexItem>
        <FlexItem
          key="right_content"
          width="50%"
          css={css`
            div.jsonform-error-where_are_you_based,
            div.jsonform-error-what_is_the_time_frame_you_have_for_planning_your_project {
              ${customSelect({ top: `12px`, right: `1.125em` })};
            }
          `}
        >
          <HTML key="demo_content" markdown={rightContent} />
          <PleziForm
            key="demo_plezi_form"
            webformId={webformId}
            formId={formId}
            tenantId={tenantId}
          />
        </FlexItem>
      </Flex>
      <h2 key="partners_title">{partners}</h2>
      <Flex key="partners" justify="space-around">
        {edges.map(({ node: { publicURL, name, id } }) => (
          <Img key={id} src={publicURL} loading="lazy" alt={name} />
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
