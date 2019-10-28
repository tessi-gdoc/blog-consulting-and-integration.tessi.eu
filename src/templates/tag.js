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
      <TagWrapper>
        <TagGrid justify="space-between">
          {allTags.map(({ fieldValue }) => (
            <FlexItem key={fieldValue}>
              <Tag
                to={`/${kebabCase(fieldValue)}`}
                partiallyActive={true}
                activeStyle={{ color: secondary }}
              >
                {tags[fieldValue]}
              </Tag>
            </FlexItem>
          ))}
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
        fields: {
          slug: { regex: "/^/(news|posts)//" }
          locale: { eq: $locale }
        }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          id
          fields {
            slug
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

export default TagTemplate;
