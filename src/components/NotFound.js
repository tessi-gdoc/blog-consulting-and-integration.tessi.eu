import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import useTranslations from '@hooks/use-translations';

import { secondary } from '@colors';
import { Tablet } from '@media';

const ErrorTemplate = styled.div`
  padding: 7vw 4vw;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  max-width: 720px;
`;

const ErrorCode = styled.h1`
  margin: 0;
  color: ${secondary};
  font-size: 4rem;
  line-height: 1em;
  letter-spacing: -5px;
  ${Tablet} {
    font-size: 8vw;
  }
`;

const ErrorDescription = styled.p`
  margin: 0;
  opacity: 0.5;
  font-size: 1.5rem;
  line-height: 1.3em;
  font-weight: 400;
  ${Tablet} {
    font-size: 2.5rem;
  }
`;

const NotFound = ({ code }) => {
  const [{ notFound }] = useTranslations();
  return (
    <ErrorTemplate>
      <ErrorCode>{code}</ErrorCode>
      <ErrorDescription>{notFound}</ErrorDescription>
    </ErrorTemplate>
  );
};

NotFound.defaultProps = {
  code: `404`
};

NotFound.propTypes = {
  code: PropTypes.string
};

export default NotFound;
