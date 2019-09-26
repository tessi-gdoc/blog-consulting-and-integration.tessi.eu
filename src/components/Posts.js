import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { hasPath } from 'ramda';
import Img from 'gatsby-image';

import Link from './LocalizedLink';

import useTranslations from '@hooks/use-translations';
import { secondary } from '@colors';
import { truncateString, isNotNil } from '@utils';

const Card = styled.article`
  flex: 1 1 500px;
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

const Tag = styled.span`
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
  const [{ readArticle, readNews }] = useTranslations();
  const { image, title, tags, date, description } = data.frontmatter;
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
                alt={`${title} cover image`}
                style={{ height: `100%` }}
                fluid={image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        </CardLink>
      )}
      <PostCardContent className="post-card-content">
        <CardLink
          className="post-card-content-link"
          to={link}
          css={PostCardContentLink}
        >
          {tags.map((tag, i) => [
            i > 0 && <Tag key={i}> • </Tag>,
            <Tag key={tag}>{tag}</Tag>
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
        </CardLink>
        <PostCardMeta className="post-card-meta">
          <ReadArticle to={link}>
            {`/` === link.substring(0, 1) ? readArticle : readNews}
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
    {allPosts.map(({ node }) => (
      <Post
        key={node.id}
        data={node}
        link={node.frontmatter.link || node.fields.slug}
      />
    ))}
  </PostFeed>
);

export default Posts;
