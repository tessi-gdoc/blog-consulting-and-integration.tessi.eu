import React from 'react';
import PropTypes from 'prop-types';
import { css, keyframes } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import Typist from 'react-typist';

import Container from './Container';
import Flex from './Flex';
import { primary } from '@colors';
import { isNotNil } from '@utils';
import { Tablet } from '@media';

const fadeInFrom = (x, y) =>
  keyframes({
    from: {
      transform: `translate3d(${x}px, ${y}px, 0)`,
      opacity: 0
    },
    to: {
      transform: `translate3d(0,0,0)`,
      opacity: 1
    }
  });

const Title = styled.h1`
  opacity: 0;
  line-height: 1;
  letter-spacing: 2px;
  animation: ${fadeInFrom(0, -50)} 1.2s forwards;
`;

const FlexContent = styled(Flex)`
  margin: 0 !important;
  height: 100px;
  min-height: 400px;
  color: white;
  ${Tablet} {
    min-height: 45vh;
  }
`;

const InnerBackgroundImage = styled(FlexContent)`
  &:after {
    content: '';
    display: block;
    opacity: 0.6;
    background-color: ${primary};
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const TypistText = styled(Typist)`
  font-size: inherit;
  text-align: center;
  ${Tablet} {
    font-size: 1.5rem;
  }
`;

const InnerContent = ({ title, children }) => {
  return (
    <InnerBackgroundImage direction="column">
      <Container>
        <Title>{title}</Title>
        {isNotNil(children) && (
          <TypistText startDelay={800}>{children}</TypistText>
        )}
      </Container>
    </InnerBackgroundImage>
  );
};

const Hero = ({ title, imageData, imageAlt, children }) => {
  if (typeof imageData === 'string')
    return (
      <FlexContent
        direction="column"
        css={css`
          position: relative;
          background-image: url('${imageData}');
          background-color: ${primary};
          background-repeat: no-repeat;
          background-size: 100%;
          z-index: 0;
        `}
      >
        <InnerContent title={title}>{children}</InnerContent>
      </FlexContent>
    );
  const gatsbyImage = imageData?.childImageSharp.fluid;
  return (
    <BackgroundImage
      Tag="header"
      id={title}
      title={title}
      alt={imageAlt || `${title} cover image`}
      role="img"
      aria-label={title}
      fluid={gatsbyImage}
      backgroundColor={primary}
    >
      <InnerContent title={title}>{children}</InnerContent>>
    </BackgroundImage>
  );
};

Hero.defaultProps = {
  imageData: '',
  children: undefined
};

Hero.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  imageData: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node
};

export default Hero;
