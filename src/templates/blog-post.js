import React from 'react';
import { graphql } from 'gatsby';
import { toUpper } from 'ramda';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import TwitterShareButton from 'react-share/lib/TwitterShareButton';
import LinkedinShareButton from 'react-share/lib/LinkedinShareButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Img from 'gatsby-image';

import useTranslations from '@hooks/use-translations';
import Hero from '@components/Hero';
import Icon from '@components/Icon';
import Container from '@components/Container';
import Posts, { HomePosts } from '@components/Posts';
import Link from '@components/LocalizedLink';
import HTML from '@components/HTML';

import { primary } from '@colors';
import { Tablet, Desktop } from '@media';

import { getId } from '@utils';

const ShareButtons = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${primary};
  & > div {
    margin: 18px;
    cursor: pointer;
  }
  ${Desktop} {
    position: fixed;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    top: 25%;
    left: 0;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: space-around;
    z-index: 1;
  }
`;

const Author = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  flex: 0 0 80px;
`;

const AuthorDescription = styled.p`
  margin-left: 12px;
`;

const Bio = ({ authors, date, tags: tagNames }) => {
  const [{ tags }] = useTranslations();
  return (
    <>
      {authors.map(data => (
        <Author key={`${data.firstname} ${data.lastname}`}>
          {data.avatar && (
            <Avatar>
              <Img
                fluid={data.avatar.childImageSharp.fluid}
                alt={data.lastname}
                style={{ width: 80, height: 80, borderRadius: `100%` }}
              />
            </Avatar>
          )}
          <AuthorDescription>
            <strong>
              Par {data.firstname} {toUpper(data.lastname)}
            </strong>{' '}
            | <time>{date}</time> |{' '}
            {tagNames.map((key, i) => [
              i > 0 && <span key={i}> • </span>,
              <Link key={key} to={`/${key}#tags`}>
                {tags[key]}
              </Link>
            ])}
          </AuthorDescription>
        </Author>
      ))}
    </>
  );
};

const PostContainer = styled(Container)`
  padding: 1.25rem;
  max-width: 980px;
  margin: 0 auto;
  ${Tablet} {
    padding: 70px 50px 0px;
  }
`;

const TocWrapper = styled.section`
  padding: 16px 24px;
  margin: 32px auto;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 15px 0 rgba(210, 214, 220, 0.5);
  & ol {
    list-style-type: none;
  }
`;

const TableOfContents = ({ headings }) => (
  <TocWrapper>
    Dans cet article, nous verrons :
    <ol>
      {headings
        .filter(({ depth }) => depth <= 2)
        .map(({ value }) => {
          const id = getId(value);
          return (
            <li key={value}>
              <AnchorLink href={`#${id}`}>{value}</AnchorLink>
            </li>
          );
        })}
    </ol>
  </TocWrapper>
);

const Intro = styled(HTML)`
  font-style: italic;
`;

const RelatedPostTitle = styled.h2`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 0;
  &:after {
    content: ' ';
    display: block;
    margin: 16px auto 0 auto;
    width: 160px;
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

const StripesRight = () => {
  return (
    <div
      css={css`
        position: absolute;
        right: -25px;
        top: 25px;
        height: auto;
        width: 100%;
        max-width: 94px;
        ${Desktop} {
          top: 0;
          right: -150px;
          max-width: 297px;
        }
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 493">
        <defs>
          <linearGradient
            id="a"
            x1="-79.7%"
            x2="122.3%"
            y1="143.7%"
            y2="-26.9%"
          >
            <stop offset="0%" stopColor="#0069B0" />
            <stop offset="23.1%" stopColor="#007ABE" />
            <stop offset="44.8%" stopColor="#8E559F" />
            <stop offset="71.8%" stopColor="#EE5D84" />
            <stop offset="100%" stopColor="#F2868F" />
          </linearGradient>
          <linearGradient id="b" x1="0%" x2="180.9%" y1="100%" y2="-77.2%">
            <stop offset="0%" stopColor="#0069B0" />
            <stop offset="23.1%" stopColor="#007ABE" />
            <stop offset="44.8%" stopColor="#8E559F" />
            <stop offset="71.8%" stopColor="#EE5D84" />
            <stop offset="100%" stopColor="#F2868F" />
          </linearGradient>
          <linearGradient id="c" x1="-162.8%" x2="61.7%" y1="202.2%" y2="28.8%">
            <stop offset="0%" stopColor="#0069B0" />
            <stop offset="23.1%" stopColor="#007ABE" />
            <stop offset="44.8%" stopColor="#8E559F" />
            <stop offset="71.8%" stopColor="#EE5D84" />
            <stop offset="100%" stopColor="#F2868F" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            fill="url(#a)"
            d="M33 334.2L239 200v63.3L33 400z"
            transform="translate(0 -43)"
          />
          <path
            fill="url(#b)"
            d="M0 470.2L206 336v63.3L0 536z"
            transform="translate(0 -43)"
          />
          <path
            fill="url(#c)"
            d="M158 134.2L364 0v63.3L158 200z"
            transform="translate(0 -43)"
          />
        </g>
      </svg>
    </div>
  );
};

const StripesLeft = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 120px;
        left: 0px;
        height: auto;
        width: 100%;
        max-width: 26px;
        ${Desktop} {
          top: 368px;
          left: -60px;
          max-width: 73px;
        }
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 240">
        <defs>
          <linearGradient id="a" x1="57.1%" x2="154.2%" y1="54.6%" y2="-75.9%">
            <stop offset="0%" stopColor="#0069B0" />
            <stop offset="23.1%" stopColor="#007ABE" />
            <stop offset="44.8%" stopColor="#8E559F" />
            <stop offset="71.8%" stopColor="#EE5D84" />
            <stop offset="100%" stopColor="#F2868F" />
          </linearGradient>
          <linearGradient id="b" x1="50%" x2="135.8%" y1="61%" y2="-74.8%">
            <stop offset="0%" stopColor="#0069B0" />
            <stop offset="23.1%" stopColor="#007ABE" />
            <stop offset="44.8%" stopColor="#8E559F" />
            <stop offset="71.8%" stopColor="#EE5D84" />
            <stop offset="100%" stopColor="#F2868F" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            fill="url(#a)"
            d="M0 262.2L206 128v63.3L0 328z"
            transform="translate(-133)"
          />
          <path
            fill="url(#b)"
            d="M0 134.2L206 0v63.3L0 200z"
            transform="translate(-133)"
          />
        </g>
      </svg>
    </div>
  );
};

const RelatedPosts = ({ currentPostId, posts, tags }) => {
  const [{ relatedPosts: title }] = useTranslations();
  const getSimilarTags = arr => arr.filter(v => tags.includes(v));
  const relatedPosts = posts.filter(
    ({ node }) =>
      node.id !== currentPostId &&
      getSimilarTags(node.frontmatter.tags).length >= 1
  );
  if (!relatedPosts.length) return null;
  return (
    <Container css={HomePosts}>
      <StripesLeft />
      <StripesRight />
      <RelatedPostTitle>{title}</RelatedPostTitle>
      <Posts allPosts={relatedPosts} />
    </Container>
  );
};
const BlogPost = ({
  location,
  data: {
    markdownRemark: post,
    allMarkdownRemark: { edges: posts }
  }
}) => {
  const {
    frontmatter: { introduction, date, title, image, authors, tags },
    html,
    headings
  } = post;

  return (
    <>
      <ShareButtons>
        <LinkedinShareButton
          url={location.href}
          title={title}
          description={introduction}
        >
          <Icon type="linkedin" color="white" />
        </LinkedinShareButton>
        <TwitterShareButton
          url={location.href}
          title={title}
          description={introduction}
        >
          <Icon type="twitter" color="white" />
        </TwitterShareButton>
      </ShareButtons>
      {image && <Hero title={title} imageData={image.childImageSharp.fluid} />}
      <PostContainer>
        <Bio authors={authors} tags={tags} date={date} />
        <Intro markdown={introduction} />
        {!!headings.length && <TableOfContents headings={headings} />}
        <article dangerouslySetInnerHTML={{ __html: html }} />
      </PostContainer>
      <RelatedPosts posts={posts} tags={tags} currentPostId={post.id} />
    </>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $locale: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      headings {
        value
        depth
      }
      html
      frontmatter {
        tags
        introduction
        description
        title
        image {
          childImageSharp {
            original {
              src
            }
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        authors {
          firstname
          lastname
          avatar {
            childImageSharp {
              fluid(maxWidth: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        date(formatString: "DD/MM/YYYY")
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { slug: { regex: "/^(/posts/)/" }, locale: { eq: $locale } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
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
