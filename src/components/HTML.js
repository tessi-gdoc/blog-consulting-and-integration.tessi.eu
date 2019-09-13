import React from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import styled from '@emotion/styled';

const Span = styled.span`
  & img {
    max-width: 100%;
  }
`;
const HTML = ({ markdown, ...props }) => {
  const converter = new showdown.Converter();
  return (
    <Span
      dangerouslySetInnerHTML={{
        __html: converter.makeHtml(markdown)
      }}
      {...props}
    />
  );
};

HTML.propTypes = {
  markdown: PropTypes.string.isRequired
};

export default HTML;
