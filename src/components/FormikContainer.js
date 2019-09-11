import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import Fade from 'react-reveal/Fade';

import { secondary } from '@colors';
import useTranslations from '@hooks/use-translations';

const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  vertical-align: top;
  & > select {
    appearance: none;
    width: 100%;
    outline: none;
  }
  &:after {
    border: 3px solid ${secondary};
    border-radius: 2px;
    border-right: 0px;
    border-top: 0px;
    content: ' ';
    display: block;
    height: 0.625em;
    margin-top: 0.375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    right: 1.125em;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
    z-index: 4;
  }
`;

export const SelectField = ({ children, ...props }) => {
  return (
    <SelectContainer>
      <FormField {...props} component="select">
        {children}
      </FormField>
    </SelectContainer>
  );
};
const InnerErrorMessage = styled.small`
  display: block;
  color: ${secondary};
  font-weight: 500;
`;

const Label = styled.label`
  font-weight: 500;
  & > span {
    color: ${secondary};
  }
`;

export const FormField = ({
  name,
  label,
  required,
  component,
  componentProps,
  children,
  ...fieldProps
}) => {
  const [{ messages }] = useTranslations();
  return (
    <>
      <Label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </Label>
      <Field
        name={name}
        render={({ field: { value, ...field } }) =>
          createElement(
            component,
            {
              ...fieldProps,
              ...field,
              ...componentProps,
              ...(typeof value === 'boolean' ? { checked: value } : { value })
            },
            children
          )
        }
        {...fieldProps}
      />

      <ErrorMessage
        name={name}
        render={key => (
          <Fade top collapse>
            <InnerErrorMessage>{messages[key]}</InnerErrorMessage>
          </Fade>
        )}
      />
    </>
  );
};

FormField.defaultProps = {
  component: 'input'
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
    PropTypes.string
  ])
};

const FormikContainer = ({ onSubmit, children, ...formikProps }) => {
  const [{ messages }] = useTranslations();

  const setError = id => {
    toast.update(id, {
      render: messages.error,
      type: toast.TYPE.ERROR,
      autoClose: 5000
    });
  };

  const setSuccess = id =>
    toast.update(id, {
      render: messages.success,
      type: toast.TYPE.SUCCESS,
      autoClose: 3000
    });

  const setLoading = () =>
    toast(messages.loading, {
      type: toast.TYPE.WARNING,
      autoClose: false
    });

  return (
    <Formik
      onSubmit={(values, actions) => {
        let toastId = setLoading();
        return onSubmit(values).then(
          () => {
            setSuccess(toastId);
            actions.setSubmitting(false);
          },
          e => {
            console.error(e.message);
            setError(toastId);
            actions.setSubmitting(false);
          }
        );
      }}
      {...formikProps}
    >
      {children}
    </Formik>
  );
};

FormikContainer.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.func
};

export default FormikContainer;
