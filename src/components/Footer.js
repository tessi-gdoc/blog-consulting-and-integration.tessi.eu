import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';

import { LocaleContext } from './Layout';
import Flex, { FlexItem } from './Flex';
import Icon from './Icon';
import Link from './LocalizedLink';
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
  const locale = React.useContext(LocaleContext);
  const [
    { allArticles, resources, caseStudies, website, contact, follow }
  ] = useTranslations();
  return (
    <Wrapper>
      <Container>
        <Flex justify="space-between" align="start">
          <FlexItem as="span">
            <Link
              name="logo"
              title="Back to home"
              to="/"
              css={{
                ':hover, :focus': { textDecoration: `none`, color: `inherit` }
              }}
            >
              <Brand />
              <br />
              Business Process Services in a digital world
            </Link>
            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Tessi website"
                href={officialWebsite}
              >
                {website}
              </a>
            </p>
            <p>
              <a title="Contact us" href={`mailto:${contactMail}`}>
                {contact}
              </a>
            </p>
          </FlexItem>
          <FlexItem as="span">
            <p>
              <Link to="/#tags">{allArticles}</Link>
            </p>
            <p>
              <Link to="/whitepapers">{resources}</Link>
            </p>
            <p>
              <Link to="/our-case-studies">{caseStudies}</Link>
            </p>
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
                    css={{ padding: `.5rem 0` }}
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
