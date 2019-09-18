import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import PleziForm, { customSelect } from './PleziForm';
import useTranslations from '@hooks/use-translations';

import Modal from './Modal';
import { Desktop } from '@media';
import { secondary } from '@colors';

const webformId = process.env.GATSBY_PLEZI_NEWSLETTER_ID,
  formId = process.env.GATSBY_PLEZI_NEWSLETTER_FORM_ID,
  tenantId = process.env.GATSBY_PLEZI_TENANT_ID;

const formStyles = css`
  .plezi-submit-btn {
    display: block;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    background-color: transparent;
    user-select: none;
    cursor: pointer;
    margin: 0 auto;
    text-align: center;
    padding: 0;
    text-transform: uppercase;
    line-height: 43px;
    width: 250px;
    height: 48px;
    outline: none;
    position: relative;
    border-width: 3px;
    border-style: solid;
    border-color: transparent;
    border-radius: 23px;
    overflow: hidden;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
    color: white;
    background-color: #ee5d84;
    &:hover,
    &:focus {
      background-color: transparent;
      border-color: ${secondary};
      color: ${secondary};
    }
  }
  div.control-group.jsonform-error-title {
    ${customSelect};
  }
`;

const Newsletter = ({ isOpen, onClose }) => {
  const [{ newsletter }] = useTranslations();

  return (
    <Modal
      isOpen={isOpen}
      title={newsletter.title}
      onClose={onClose}
      css={{ marginTop: 0, [Desktop]: { marginTop: `15vh` } }}
    >
      <p>{newsletter.content}</p>
      <PleziForm
        webformId={webformId}
        formId={formId}
        tenantId={tenantId}
        css={formStyles}
      />
    </Modal>
  );
};

Newsletter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Newsletter;
