import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import SyncLoader from 'react-spinners/SyncLoader';

import Cta, { enumTypes } from './Cta';
import HTML from './HTML';

import useTranslations from '@hooks/use-translations';
import { secondary } from '@colors';

export const customSelect = (
  arrowStyles = { top: `1.125em`, right: `1.125em` }
) => css`
  .controls {
    display: inline-block;
    position: relative;
    width: 100%;
    vertical-align: top;
    &:after {
      border: 3px solid ${secondary};
      border-radius: 2px;
      border-right: 0px;
      border-top: 0px;
      content: ' ';
      display: block;
      height: 0.625em;
      width: 0.625em;
      pointer-events: none;
      position: absolute;
      transform: rotate(-45deg);
      transform-origin: center;
      z-index: 4;
      ${typeof arrowStyles === `object`
        ? Object.keys(arrowStyles).map(key => `${key}: ${arrowStyles[key]};\n`)
        : ``}
    }
    & > select {
      appearance: none;
      width: 100%;
      outline: none;
      background-image: none !important;
      background-position: initial !important;
      &::-ms-expand {
        display: none;
      }
    }
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const ErrorWrapper = styled.div`
  text-align: center;
  background-color: #ededee;
  padding-top: 0.5em;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 2em;
  border-radius: 5px;
`;

const useScript = src => {
  const [state, setState] = useState({ loaded: false, error: false });

  useEffect(() => {
    let script = document.createElement('script');
    script.src = src;
    script.async = true;
    const onScriptLoad = () => setState({ loaded: true, error: false });

    const onScriptError = () => {
      script.remove();
      setState({ loaded: true, error: true });
    };
    script.addEventListener('load', onScriptLoad);
    script.addEventListener('error', onScriptError);
    document.body.appendChild(script);
    return () => {
      script.removeEventListener('load', onScriptLoad);
      script.removeEventListener('error', onScriptError);
      script.remove();
    };
  }, [src]);

  return [state.loaded, state.error];
};

const PleziForm = ({ webformId, formId, tenantId }) => {
  const [{ form }] = useTranslations();
  const [loaded, error] = useScript(
    `https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${formId}&form_version=3&content_web_form_id=${webformId}`
  );
  if (error) {
    return (
      <ErrorWrapper>
        <HTML markdown={form.failed} />
        <Cta type={enumTypes.SECONDARY} link="/" size="large">
          {form.backToHome}
        </Cta>
      </ErrorWrapper>
    );
  }
  return (
    <>
      <form id={`foss-${webformId}`}></form>
      <Wrapper>
        <SyncLoader color={secondary} loading={!loaded} />
      </Wrapper>
    </>
  );
};

PleziForm.propTypes = {
  webformId: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  tenantId: PropTypes.string.isRequired
};

export default PleziForm;
