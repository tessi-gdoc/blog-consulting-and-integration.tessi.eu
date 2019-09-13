import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import useTranslations from '@hooks/use-translations';

import Modal from './Modal';
import { Desktop } from '@media';

const webformId = process.env.GATSBY_PLEZI_NEWSLETTER_ID,
  formId = process.env.GATSBY_PLEZI_NEWSLETTER_FORM_ID,
  tenantId = process.env.GATSBY_PLEZI_TENANT_ID;

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
      <form
        onSubmit={e => {
          e.preventDefault();
          return navigate(`/thank-you`).then(onClose);
        }}
        id={`foss_${webformId}`}
      ></form>
    </Modal>
  );
};

Newsletter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Newsletter;
