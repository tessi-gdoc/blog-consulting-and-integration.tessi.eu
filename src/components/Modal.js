import React from 'react';
import PropTypes from 'prop-types';
import { equals, cond, always, identity, T } from 'ramda';
import styled from '@emotion/styled';
import ReactModal from 'react-modal';
import Icon from './Icon';
import { isNotNil } from '@utils';
import { primary, secondary } from '@colors';

const DialogCloser = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 10;
  line-height: 1;
  text-decoration: none;
  transition: color 0.3s;
  outline: 0;
  padding: 0;
`;

const ModalFrame = styled.div`
  overflow-y: auto;
  padding: 0rem 4rem 2rem;
`;

const getSize = cond([
  [equals(`small`), always(`360px`)],
  [equals(`medium`), always(`480px`)],
  [equals(`large`), always(`640px`)],
  [equals(`x-large`), always(`1080px`)],
  [T, identity]
]);

const StyledModal = styled(ReactModal)`
  position: relative;
  overflow: auto;
  outline: none;
  margin: 0 auto;
  background: white;
  border-top: 6px solid ${secondary};
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.5);
  max-width: ${props => getSize(props.width)};
  & > h2 {
    padding: 2.5rem 2rem 0 2.5rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

ReactModal.setAppElement(`#gatsby-focus-wrapper`);

const Modal = ({ title, isOpen, onClose, footer, children, ...props }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      contentLabel={title}
      closeTimeoutMS={300}
      style={{
        overlay: {
          zIndex: 9999,
          backgroundColor: `rgba(0,0,0,.4)`
        }
      }}
      {...props}
    >
      {title && <h2>{title}</h2>}
      {onClose && (
        <DialogCloser role="navigation" onClick={onClose} aria-label="Close">
          <Icon type="close" color={primary} />
        </DialogCloser>
      )}
      <ModalFrame>{children}</ModalFrame>
      {isNotNil(footer) && footer}
    </StyledModal>
  );
};

Modal.defaultProps = {
  title: null,
  isOpen: true,
  onClose: undefined,
  footer: undefined,
  width: `large`
};

Modal.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  footer: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  width: PropTypes.oneOfType([
    PropTypes.oneOf([`small`, `medium`, `large`, `x-large`]),
    PropTypes.string
  ]),
  height: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Modal;
