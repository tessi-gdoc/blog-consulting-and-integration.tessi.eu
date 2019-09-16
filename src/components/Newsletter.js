import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';

import useTranslations from '@hooks/use-translations';

import Modal from './Modal';
import { Desktop } from '@media';
import { secondary } from '@colors';

const webformId = process.env.GATSBY_PLEZI_NEWSLETTER_ID,
  formId = process.env.GATSBY_PLEZI_NEWSLETTER_FORM_ID,
  tenantId = process.env.GATSBY_PLEZI_TENANT_ID;

const Form = styled.form`
  .jsonform-error-title {
    & > .controls {
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
        margin-top: -0.375em;
        pointer-events: none;
        position: absolute;
        top: 50%;
        right: 1.125em;
        transform: rotate(-45deg);
        transform-origin: center;
        width: 0.625em;
        z-index: 4;
      }
      & > select {
        appearance: none;
        width: 100%;
        outline: none;
      }
    }
  }
`;

const Newsletter = ({ isOpen, onClose }) => {
  const [{ newsletter }] = useTranslations();
  React.useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.id = webformId;
      script.src = `https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${formId}&form_version=3&content_web_form_id=${webformId}`;
      script.async = true;
      document.body.appendChild(script);
    } else {
      const script = document.getElementById(webformId);
      if (script !== null) document.body.removeChild(script);
    }
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      title={newsletter.title}
      onClose={onClose}
      css={{ marginTop: 0, [Desktop]: { marginTop: `15vh` } }}
    >
      <p>{newsletter.content}</p>
      <Form id={`foss-${webformId}`}></Form>
    </Modal>
  );
};

Newsletter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Newsletter;
