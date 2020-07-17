import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { hasPath } from 'ramda';
import Img from 'gatsby-image/withIEPolyfill';

import Flex from './Flex';
import Link from './LocalizedLink';

import useTranslations from '@hooks/use-translations';
import { secondary } from '@colors';
import { Tablet } from '@media';
import { truncateString, isNotNil } from '@utils';

export const TagGrid = styled(Flex)`
  padding: 2rem 0;
  margin: 0 auto !important;
  text-align: center;
  max-width: 1080px;
`;

export const TagWrapper = styled.section`
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 5px;
    background-color: #1a214d;
    background-image: linear-gradient(
      to right,
      #3e6aae 0%,
      #447dbc 20%,
      #86589d 40%,
      #df6584 80%,
      #e58b90 100%
    );
  }
`;

export const Tag = styled(Link)`
  display: inline-block;
  vertical-align: sub;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 700;
  font-size: 1.15em;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${secondary};
  }
`;

export const HomePosts = css`
  ${Tablet} {
    padding: 2rem 0.75rem;
    .post-card:first-of-type:not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }
    .post-card:first-of-type:not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
    }
    .post-card:first-of-type:not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .post-card:first-of-type:not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }
    .post-card:first-of-type:not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }
    .post-card:first-of-type:not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

const Card = styled.article`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 20px 40px;
  min-height: 400px;
  background: #fff center center;
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
  ${Tablet} {
    flex-grow: 0;
    flex-basis: calc(50% - 40px);
  }
`;

const CardLink = ({ to, children, ...props }) => {
  const isSlug = `/` === to.substring(0, 1);
  return isSlug ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

CardLink.propTypes = {
  to: PropTypes.string.isRequired
};

const Header = styled.header`
  & > h2 {
    margin: 0.5em 0;
  }
  & > span {
    display: block;
    color: #738a94;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

const InlineTag = styled.span`
  color: ${secondary};
`;

const ReadArticle = styled(CardLink)`
  text-transform: uppercase;
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 220px;
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

const Section = styled.section`
  font-size: 14px;
`;

const Post = ({ data, link }) => {
  const [{ readArticle, readNews, tags }] = useTranslations();
  const {
    image,
    imageAlt,
    title,
    tags: allTags,
    date,
    description
  } = data.frontmatter;
  return (
    <Card className={`post-card ${image ? '' : 'no-image'}`}>
      {image && (
        <CardLink
          className="post-card-image-link"
          to={link}
          css={PostCardImageLink}
        >
          <PostCardImage className="post-card-image">
            {hasPath(['image', 'childImageSharp', 'fluid']) && (
              <Img
                alt={imageAlt || `${title} cover image`}
                style={{ height: `100%` }}
                fluid={image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        </CardLink>
      )}
      <PostCardContent className="post-card-content">
        <div className="post-card-content-link" css={PostCardContentLink}>
          {allTags.map((t, i) => [
            i > 0 && <InlineTag key={i}> • </InlineTag>,
            <InlineTag key={t}>{tags[t]}</InlineTag>
          ])}
          <Header className="post-card-header">
            <span>{date}</span>
            <h2>{title}</h2>
          </Header>
          <Section>
            <p>
              {isNotNil(description)
                ? truncateString(description, 200)
                : data.excerpt}
            </p>
          </Section>
        </div>
        <PostCardMeta className="post-card-meta">
          <ReadArticle to={link}>
            {link.startsWith('/posts') ? readArticle : readNews}
          </ReadArticle>
        </PostCardMeta>
      </PostCardContent>
    </Card>
  );
};

Post.propTypes = {
  data: PropTypes.object,
  link: PropTypes.string
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
    {allPosts.map(({ node }) => {
      const blogPostLink = node.frontmatter.path
        ? `/posts/${node.frontmatter.path}`
        : `/${node.parent.relativeDirectory}`;
      return (
        <Post
          key={node.id}
          data={node}
          link={node.frontmatter.link || blogPostLink}
        />
      );
    })}
  </PostFeed>
);

export default Posts;
