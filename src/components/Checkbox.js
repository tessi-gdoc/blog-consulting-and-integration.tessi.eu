import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { primary, secondary } from '@colors';

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  cursor: pointer;
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.checked ? secondary : `transparent`)};
  border: 2px solid ${props => (props.checked ? `transparent` : primary)};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  & > svg {
    display: block;
    fill: white;
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

const Label = styled.label`
  display: block;
`;

const Checkbox = ({ className, checked, label, ...props }) => (
  <Label>
    <CheckboxContainer className={className}>
      <HiddenCheckbox type="checkbox" checked={checked} {...props} />
      <StyledCheckbox checked={checked}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
        </svg>
      </StyledCheckbox>
    </CheckboxContainer>
    <span css={{ marginLeft: 8 }}>{label}</span>
  </Label>
);

Checkbox.defaultProps = {
  checked: false
};

Checkbox.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool
};

export default Checkbox;
