import React from 'react';
import styled from '@emotion/styled';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { LocaleContext } from './Layout';
import Flex, { FlexItem } from './Flex';
import Icon from './Icon';
import Brand from './Brand';
import Container from './Container';
import useTranslations from '@hooks/use-translations';
import { lightGrey, primary } from '@colors';
import { Tablet } from '@media';

const Wrapper = styled.footer`
  flex: 0 0 auto;
  position: relative;
  background: ${lightGrey};
  text-align: center;
  ${Tablet} {
    text-align: left;
  }
`;

const LegalLinks = styled.div`
  margin-top: 2rem;
  & > a {
    font-weight: 400;
  }
`;

const SocialWrapper = styled(Flex)`
  margin: 0 !important;
  padding-top: 0.75rem;
`;

const Footer = () => {
  const {
    allMarkdownRemark,
    site: {
      siteMetadata: { social, officialWebsite, contactMail }
    }
  } = useStaticQuery(graphql`
    query Footer {
      site {
        siteMetadata {
          social {
            name
            link
          }
          officialWebsite
          contactMail
        }
      }
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/^(/notices/)/" } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
              locale
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);
  const { locale } = React.useContext(LocaleContext);
  const [
    { allArticles, resources, caseStudies, website, contact, follow }
  ] = useTranslations();
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" align="start">
          <FlexItem>
            <Link name="logo" title="Back to home" to="/">
              <Brand />
            </Link>
            <p>
              <strong>Business Process Services in a digital world</strong>
            </p>
          </FlexItem>
          <FlexItem as="span">
            <Flex direction="column">
              <FlexItem>
                <Link to="/">{allArticles}</Link>
              </FlexItem>
              <FlexItem>
                <Link to="/whitepapers">{resources}</Link>
              </FlexItem>
              <FlexItem>
                <Link to="/case-studies">{caseStudies}</Link>
              </FlexItem>
              <FlexItem>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Tessi website"
                  href={officialWebsite}
                >
                  {website}
                </a>
              </FlexItem>
              <FlexItem>
                <a title="Contact us" href={`mailto:${contactMail}`}>
                  {contact}
                </a>
              </FlexItem>
            </Flex>
          </FlexItem>
          {social && social.length && (
            <FlexItem as="span">
              <strong>{follow}</strong>
              <SocialWrapper direction="column" flexWrap={false}>
                {social.map(({ name, link }) => (
                  <a
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    href={link}
                    css={{ padding: `0 0.75rem` }}
                  >
                    <Icon type={name} color={primary} />
                  </a>
                ))}
              </SocialWrapper>
            </FlexItem>
          )}
        </Flex>
        <LegalLinks>
          {allMarkdownRemark.edges
            .filter(({ node }) => node.fields.locale === locale)
            .map(({ node }, i) => [
              i > 0 && ' • ',
              <Link key={node.id} to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            ])}
        </LegalLinks>
      </Container>
    </Wrapper>
  );
};

export default Footer;
