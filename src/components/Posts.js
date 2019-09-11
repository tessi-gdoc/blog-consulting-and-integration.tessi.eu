import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { hasPath } from 'ramda';
import Img from 'gatsby-image';

import Link from './LocalizedLink';

import useTranslations from '@hooks/use-translations';
import { secondary } from '@colors';

const Card = styled.article`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 400px;
  background: #fff center center;
  background-size: cover;
  box-shadow: rgba(39, 44, 49, 0.06) 8px 14px 38px,
    rgba(39, 44, 49, 0.03) 1px 3px 8px;
  transition: all 0.5s ease;
  & a {
    font: inherit;
    &:hover,
    &:focus {
      text-decoration: none;
      color: inherit;
    }
  }
  :hover {
    box-shadow: rgba(39, 44, 49, 0.07) 8px 28px 50px,
      rgba(39, 44, 49, 0.04) 1px 6px 12px;
    transition: all 0.4s ease;
    transform: translate3D(0, -1px, 0) scale(1.02);
  }
`;

const Header = styled.header`
  & > h2 {
    margin: 0 0 0.5em 0;
  }
  & > span {
    display: block;
    color: #738a94;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const Tag = styled.span`
  color: ${secondary};
`;

const ReadArticle = styled(Link)`
  text-transform: uppercase;
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostCardContentLink = css`
  position: relative;
  flex-grow: 1;
  display: block;
  padding: 25px 25px 0;
  :hover {
    text-decoration: none;
  }
`;

const PostCardMeta = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 25px 25px;
`;

const Post = ({ frontmatter, slug }) => {
  const [{ readArticle }] = useTranslations();
  return (
    <Card className={`post-card ${frontmatter.image ? '' : 'no-image'}`}>
      {frontmatter.image && (
        <Link
          className="post-card-image-link"
          to={slug}
          css={PostCardImageLink}
        >
          <PostCardImage className="post-card-image">
            {hasPath(['frontmatter', 'image', 'childImageSharp', 'fluid']) && (
              <Img
                alt={`${frontmatter.title} cover image`}
                style={{ height: `100%` }}
                fluid={frontmatter.image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        </Link>
      )}
      <PostCardContent className="post-card-content">
        <Link
          className="post-card-content-link"
          to={slug}
          css={PostCardContentLink}
        >
          {frontmatter.tags.map(tag => (
            <Tag key={tag}> {tag}</Tag>
          ))}
          <Header className="post-card-header">
            <span>{frontmatter.date}</span>
            <h2>{frontmatter.title}</h2>
          </Header>
          <section>
            <p>{frontmatter.description}</p>
          </section>
        </Link>
        <PostCardMeta className="post-card-meta">
          <ReadArticle to={slug}>{readArticle}</ReadArticle>
        </PostCardMeta>
      </PostCardContent>
    </Card>
  );
};

Post.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    image: PropTypes.object,
    tags: PropTypes.arrayOf(PropTypes.string)
  }),
  slug: PropTypes.string
};

const PostFeed = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 -20px;
  padding: 40px 0 0 0;
`;

const Posts = ({ allPosts }) => (
  <PostFeed>
    {allPosts.map(({ node }) => (
      <Post
        key={node.id}
        frontmatter={node.frontmatter}
        slug={node.fields.slug}
      />
    ))}
  </PostFeed>
);

export default Posts;
