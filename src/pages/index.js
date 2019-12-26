import React from 'react';
import { graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';

import useTranslations from '@hooks/use-translations';
import { FlexItem } from '@components/Flex';
import NotFound from '@components/NotFound';
import Container from '@components/Container';
import Posts, { TagWrapper, TagGrid, HomePosts, Tag } from '@components/Posts';

import { getTags } from '@utils';

const Blog = ({
  data: {
    allMarkdownRemark: { edges, group: postGroup }
  }
}) => {
  const [{ tags }] = useTranslations();
  const allTags = getTags(tags, postGroup);
  return (
    <>
      <TagWrapper id="tags">
        <TagGrid justify="space-between">
          {allTags.map(({ fieldValue }) => (
            <FlexItem key={fieldValue}>
              <Tag to={`/${kebabCase(fieldValue)}#tags`}>
                {tags[fieldValue]}
              </Tag>
            </FlexItem>
          ))}
        </TagGrid>
      </TagWrapper>
      {edges.length > 0 ? (
        <Container css={HomePosts}>
          <Posts allPosts={edges} />
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export const pageQuery = graphql`
  query Index($locale: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { key: { regex: "/^(news|blog-post)/" } }
        fields: { locale: { eq: $locale } }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          parent {
            ... on File {
              relativeDirectory
            }
          }
          excerpt(pruneLength: 200)
          frontmatter {
            title
            link
            description
            tags
            date(formatString: "D MMMM YYYY", locale: $locale)
            image {
              childImageSharp {
                fluid(maxWidth: 1920, traceSVG: { color: "#1a214d" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
