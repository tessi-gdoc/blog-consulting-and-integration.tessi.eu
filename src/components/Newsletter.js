import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import * as Yup from 'yup';

import useTranslations from '@hooks/use-translations';
import FormikContainer, { FormField, SelectField } from './FormikContainer';
import Modal from './Modal';
import Flex, { FlexItem } from './Flex';
import Cta, { enumTypes } from './Cta';
import { Desktop } from '@media';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('required'),
  name: Yup.string().required('required'),
  mail: Yup.string()
    .email('invalidMail')
    .required('required')
});

const Newsletter = ({ isOpen, onClose }) => {
  const [
    {
      newsletter: { title, content, form, submit }
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
      <FormikContainer
        initialValues={{ mail: '', title: 'M.', name: '' }}
        validationSchema={validationSchema}
        onSubmit={values =>
          new Promise(res => setTimeout(() => res(values), 3000))
            .then(() => navigate(`/thank-you`))
            .then(onClose)
        }
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Flex>
              <FlexItem width="100%">
                <FormField name="mail" label={form.mail} />
              </FlexItem>
              <FlexItem width="100%">
                <SelectField name="title" label={form.title}>
                  <option value="M.">M.</option>
                  <option value="Mme">Mme</option>
                </SelectField>
              </FlexItem>
              <FlexItem width="100%">
                <FormField name="name" label={form.name} />
              </FlexItem>
              <FlexItem width="100%" css={{ textAlign: `center` }}>
                <Cta htmltype="submit" type={enumTypes.PRIMARY}>
                  {submit}
                </Cta>
              </FlexItem>
            </Flex>
          </form>
        )}
      </FormikContainer>
    </Modal>
  );
};

Newsletter.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Newsletter;
