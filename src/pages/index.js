import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import useTranslations from '@hooks/use-translations';
import Hero from '@components/Hero';
import Icon from '@components/Icon';
import ConsultingLogo from '@components/Icon/ConsultingLogo';
import Flex, { FlexItem } from '@components/Flex';
import Container from '@components/Container';
import Banner from '@components/Banner';
import Cta, { enumTypes } from '@components/Cta';
import Posts from '@components/Posts';
import NotFound from '@components/NotFound';
import HTML from '@components/HTML';

import { secondary } from '@colors';
import { Tablet } from '@media';

const Journey = styled.span`
  font-weight: 400;
`;

const TagGrid = styled(Flex)`
  padding: 2rem 0;
  margin: 0 auto !important;
  text-align: center;
  max-width: 1200px;
`;

const TagWrapper = styled.section`
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

const Title = styled.h2`
  position: relative;
  color: ${secondary};
  text-transform: uppercase;
  &:after {
    content: ' ';
    display: block;
    margin-top: 8px;
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

const Tag = styled.button`
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

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Service = styled.div`
  position: absolute;
  right: auto;
  left: 25px;
  top: 25px;
  color: white;
  & > svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const SocialButtons = styled.aside`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 25px;
  top: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: 120px;
  ${Tablet} {
    right: 25px;
    left: auto;
    top: 0;
    bottom: 0;
    margin: auto 0;
    max-height: 120px;
    flex-direction: column;
  }
`;

const HomePosts = css`
  ${Tablet} {
    padding: 2rem 0.75rem;
    .post-card:nth-of-type(6n + 1):not(.no-image) {
      flex: 1 1 100%;
      flex-direction: row;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content {
      flex: 0 1 357px;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-content-link {
      padding: 30px 40px 0;
    }
    .post-card:nth-of-type(6n + 1):not(.no-image) .post-card-meta {
      padding: 0 40px 30px;
    }
  }
`;

const getTags = (edges, group) =>
  group.reduce((acc, tag) => {
    const idx = acc.findIndex(node => node.name === tag.fieldValue);
    acc[idx] = tag;
    return acc;
  }, edges);

const getPosts = (posts, tag) =>
  tag
    ? posts.reduce((acc, post) => {
        const { tags = [] } = post.node.frontmatter;
        if (tags.includes(tag)) acc.push(post);
        return acc;
      }, [])
    : posts;

const Blog = ({
  data: {
    allMarkdownRemark: { edges, group: postGroup },
    site: {
      siteMetadata: { social, officialWebsite }
    }
  }
}) => {
  const [
    { tags, offers, about, convinced, demo, subtitle, service }
  ] = useTranslations();
  const [tag, setTag] = React.useState(null);
  const allPosts = getPosts(edges, tag),
    allTags = getTags(tags, postGroup);
  return (
    <>
      <HeroWrapper>
        <Service>
          <ConsultingLogo />
          {service}
        </Service>
        <Hero
          title={
            <>
              Tessi#<Journey>Journey</Journey>
            </>
          }
        >
          {subtitle}
        </Hero>
        <SocialButtons>
          {social.map(({ name, link }) => (
            <a
              key={name}
              target="_blank"
              rel="noopener noreferrer"
              title={name}
              href={link}
            >
              <Icon type={name} color="white" />
            </a>
          ))}
        </SocialButtons>
      </HeroWrapper>
      <TagWrapper>
        <TagGrid justify="space-between">
          {allTags.map(name => (
            <FlexItem key={name}>
              <Tag onClick={() => setTag(name)}>{name}</Tag>
            </FlexItem>
          ))}
        </TagGrid>
      </TagWrapper>
      {allPosts.length ? (
        <Container css={HomePosts}>
          <Posts allPosts={allPosts} />
        </Container>
      ) : (
        <NotFound />
      )}
      <Banner>
        <Container>
          <Flex justify="space-between">
            <FlexItem width="auto">
              <h2>{about.title}</h2>
            </FlexItem>
            <FlexItem width="55%">
              <HTML markdown={about.content} />
            </FlexItem>
            <FlexItem width="auto">
              <Cta link={offers.link} size="large">
                {offers.text}
              </Cta>
            </FlexItem>
          </Flex>
        </Container>
      </Banner>
      <Container>
        <Flex justify="space-between">
          <FlexItem width="auto">
            <Title>{convinced}</Title>
          </FlexItem>
          <FlexItem width="auto">
            <Cta type={enumTypes.SECONDARY_BORDERED} link="/demo" size="large">
              {demo}
            </Cta>
          </FlexItem>
        </Flex>
      </Container>
    </>
  );
};

export const pageQuery = graphql`
  query Index($locale: String!) {
    site {
      siteMetadata {
        social {
          name
          link
        }
      }
    }
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
          excerpt(pruneLength: 160)
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
