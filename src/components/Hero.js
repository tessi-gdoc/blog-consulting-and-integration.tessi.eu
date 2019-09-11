import React from 'react';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';
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
  min-height: 280px;
  color: white;
  ${Tablet} {
    min-height: 40vh;
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

const BackgroundColor = styled(FlexContent)`
  background-color: ${primary};
  text-align: center;
`;

const TypistText = styled(Typist)`
  font-size: inherit;
  ${Tablet} {
    font-size: 1.5rem;
  }
`;

const InnerContent = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {isNotNil(children) && (
        <TypistText startDelay={800}>{children}</TypistText>
      )}
    </Container>
  );
};

const Hero = ({ title, imageData, children }) => {
  if (!imageData)
    return (
      <BackgroundColor direction="column">
        <InnerContent title={title}>{children}</InnerContent>
      </BackgroundColor>
    );
  return (
    <BackgroundImage
      Tag="header"
      id={title}
      title={title}
      role="img"
      aria-label={title}
      fluid={imageData}
      backgroundColor={primary}
    >
      <InnerBackgroundImage direction="column">
        <InnerContent title={title}>{children}</InnerContent>
      </InnerBackgroundImage>
      >
    </BackgroundImage>
  );
};

Hero.defaultProps = {
  imageData: null,
  children: undefined
};

Hero.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  imageData: PropTypes.object,
  children: PropTypes.node
};

export default Hero;
