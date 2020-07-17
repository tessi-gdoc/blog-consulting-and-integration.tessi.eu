import React from 'react';
import styled from '@emotion/styled';

import NotFound from '@components/NotFound';

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 640px;
  height: 100%;
  width: 100%;
`;

export default () => (
  <ErrorContainer>
    <NotFound />
  </ErrorContainer>
);
