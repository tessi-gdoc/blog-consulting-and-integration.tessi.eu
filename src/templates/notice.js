import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Container from '@components/Container';
import Banner from '@components/Banner';

const TitleWrapper = styled(Container)`
  text-align: center;
  max-width: 860px;
`;

const Notice = ({
  data: {
    markdownRemark: { html, frontmatter }
  }
}) => {
  return (
    <>
      <Container>
        <Banner>
          <TitleWrapper>
            <h1>{frontmatter.title}</h1>
          </TitleWrapper>
        </Banner>
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </>
  );
};

export default Notice;

export const pageQuery = graphql`
  query NoticeBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
