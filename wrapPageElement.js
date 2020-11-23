import React from 'react';
import { test } from 'ramda';
import styled from '@emotion/styled';
import Layout from './src/components/Layout';
import useTranslations from './src/components/hooks/use-translations';
import Container from './src/components/Container';
import Hero from './src/components/Hero';
import Icon from './src/components/Icon';
import ConsultingLogo from './src/components/Icon/ConsultingLogo';
import Flex, { FlexItem } from './src/components/Flex';
import Banner from './src/components/Banner';
import HTML from './src/components/HTML';
import Cta, { enumTypes } from './src/components/Cta';
import { secondary } from './src/styles/colors';
import { Tablet } from './src/styles/media';
import { siteMetadata } from './gatsby-config';

const Journey = styled.span`
  font-weight: 400;
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 auto;
  max-width: 120px;
  max-height: none;
  ${Tablet} {
    right: 25px;
    left: auto;
    top: 0;
    bottom: 0;
    margin: auto 0;
    width: auto;
    max-width: none;
    max-height: 120px;
    flex-direction: column;
  }
`;

const Header = () => {
  const [{ service, subtitle }] = useTranslations();
  return (
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
        {siteMetadata.social.map(({ name, link }) => (
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
  );
};

const Footer = () => {
  const [{ about, offers, convinced, demo }] = useTranslations();
  return (
    <>
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

const wrapPageElement = ({ element, props }) => {
  const { pathname } = props.location;
  const { isDefault, locale } = props.pageContext;
  const localizedRegex = (path) =>
    new RegExp(`^${isDefault ? `/` : `/${locale}/`}${path}`);
  const isArticle = test(localizedRegex('posts/[^\n]+'), pathname);
  const isHomePage = !test(
    localizedRegex(
      '(posts|notices|thank-you|whitepapers|our-case-studies|kits|demo|videos|webinars)'
    ),
    pathname
  );
  let seo = {};
  if (isArticle && element.props?.data?.markdownRemark?.frontmatter) {
    const {
      title,
      description,
      image,
      author,
      date,
      canonicalUrl
    } = element.props.data.markdownRemark.frontmatter;
    seo = {
      title,
      description,
      author: author ? author.fullname : null,
      publishDate: date,
      article: true,
      canonicalUrl,
      ...(image ? { image: image.childImageSharp.original.src } : {})
    };
  }
  return (
    <Layout location={props.location} pageContext={props.pageContext} seo={seo}>
      {isHomePage && <Header />}
      {element}
      {isHomePage && <Footer />}
    </Layout>
  );
};

export default wrapPageElement;
