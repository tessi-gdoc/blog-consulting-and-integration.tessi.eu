import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

import useTranslations from '@hooks/use-translations';

import Modal from './Modal';
import { Desktop } from '@media';

const webcontentId = process.env.GATSBY_PLEZI_NEWSLETTER_ID;

const Newsletter = ({ isOpen, onClose }) => {
  const [
    {
      newsletter: { title, content }
    }
  ] = useTranslations();
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      onClose={onClose}
      css={{ marginTop: 0, [Desktop]: { marginTop: `15vh` } }}
    >
      <p>{content}</p>
      <form
        onSubmit={() => navigate(`/thank-you`).then(onClose)}
        id={`foss_${webcontentId}`}
      ></form>
    </Modal>
  );
};

Newsletter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Newsletter;
