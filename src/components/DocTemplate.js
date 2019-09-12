import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Cta, { enumTypes } from './Cta';
import Flex, { FlexItem } from './Flex';
import { Tablet } from '@media';

const Description = styled.article`
  margin-bottom: 1.5em;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    margin: 2.5rem 0;
    background-color: #1a214d;
    background-image: linear-gradient(
      to right,
      #3e6aae 0%,
      #447dbc 20%,
      #86589d 40%,
      #df6584 80%,
      #e58b90 100%
    );
    ${Tablet} {
      margin: 6rem 0;
    }
  }
`;

const DocTemplate = ({ title, content, cta, imageData }) => (
  <Wrapper>
    <Flex justify="space-between">
      <FlexItem width="400px">
        <Img fluid={imageData} alt={title} />
      </FlexItem>
      <FlexItem width="calc(100% - 450px)">
        <h3>{title}</h3>
        <Description dangerouslySetInnerHTML={{ __html: content }} />
        <Cta type={enumTypes.SECONDARY} link={cta.link} size="large">
          {cta.text}
        </Cta>
      </FlexItem>
    </Flex>
  </Wrapper>
);

DocTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  cta: PropTypes.shape({
    link: PropTypes.string,
    text: PropTypes.string
  }),
  imageData: PropTypes.object
};

export default DocTemplate;
