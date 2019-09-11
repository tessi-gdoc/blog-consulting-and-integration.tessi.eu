import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Container from './Container';
import Cta, { enumTypes } from './Cta';
import Flex, { FlexItem } from './Flex';
import { secondary } from '@colors';

const Description = styled.article`
  margin-bottom: 1.5em;
`;

const Wrapper = styled(Container)`
  border-radius: 1px;
  border-bottom: 2px solid ${secondary};
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
        <Cta type={enumTypes.SECONDARY} link={cta.link}>
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
