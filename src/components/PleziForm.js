import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import SyncLoader from 'react-spinners/SyncLoader';

import { secondary } from '@colors';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const loadPleziScript = (tenantId, formId, webformId) => {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = `https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${formId}&form_version=3&content_web_form_id=${webformId}`;
  script.async = true;
  document.body.appendChild(script);
  return script;
};

const observeChildList = (targetId, cb) => {
  const form = document.getElementById(targetId);
  const observer = new MutationObserver(cb);
  observer.observe(form, { childList: true });
  return observer;
};

const PleziForm = ({ webformId, formId, tenantId, ...props }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = loadPleziScript(tenantId, formId, webformId);
    const id = `foss-${webformId}`;
    const observer = observeChildList(id, () => setLoading(false));
    return () => {
      observer.disconnect();
      script.parentNode.removeChild(script);
    };
  }, [tenantId, formId, webformId]);
  return (
    <>
      <form id={`foss-${webformId}`} {...props}></form>
      <Wrapper>
        <SyncLoader color={secondary} loading={loading} />
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
