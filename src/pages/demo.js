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
        css={css`
          font-size: 1.75rem;
          text-align: center;
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
          <Img key={id} src={publicURL} alt={name} />
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
