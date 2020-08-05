import React from 'react';
import { graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';

import useTranslations from '@hooks/use-translations';
import { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import Posts, { TagWrapper, TagGrid, HomePosts, Tag } from '@components/Posts';
import NotFound from '@components/NotFound';

import { secondary } from '@colors';
import { getTags } from '@utils';

const getPosts = (posts, tag) =>
  posts.reduce((acc, post) => {
    const { tags = [] } = post.node.frontmatter;
    if (tags.includes(tag)) acc.push(post);
    return acc;
  }, []);

const TagTemplate = ({
  pageContext,
  data: {
    allMarkdownRemark: { edges, group: postGroup }
  }
}) => {
  const [{ tags }] = useTranslations();
  const allTags = getTags(tags, postGroup),
    allPosts = getPosts(edges, pageContext.tag);
  return (
    <>
      <TagWrapper id="tags">
        <TagGrid justify="space-between">
          {allTags.map(({ fieldValue }) => {
            const slug = `/${kebabCase(fieldValue)}`;
            return (
              <FlexItem key={fieldValue}>
                <Tag
                  to={`${slug}#tags`}
                  getProps={({ location }) => {
                    return location.pathname.startsWith(slug)
                      ? { style: { color: secondary } }
                      : null;
                  }}
                >
                  {tags[fieldValue]}
                </Tag>
              </FlexItem>
            );
          })}
        </TagGrid>
      </TagWrapper>
      {allPosts.length > 0 ? (
        <Container css={HomePosts}>
          <Posts allPosts={allPosts} />
        </Container>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export const pageQuery = graphql`
  query Tag($locale: String!) {
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
            path
            date(formatString: "D MMMM YYYY", locale: $locale)
            image {
              childImageSharp {
                fluid(maxWidth: 720, traceSVG: { color: "#1a214d" }) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TagTemplate;
