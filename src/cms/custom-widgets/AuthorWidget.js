import React from 'react';
import Select from 'react-select';
import { identity } from 'ramda';
import { reactSelectStyles } from 'netlify-cms-ui-default/dist/esm/styles';

import authors from '../../data/author.json';

const getOptionLabel = (placeholder) => (option) => {
  const selected = option?.value ?? option;
  const maybeOption = authors.list.find((author) => author.id === selected);
  return maybeOption ? maybeOption.fullname : placeholder;
};

const Control = ({
  field,
  value,
  forID,
  classNameWrapper,
  setActiveStyle,
  setInactiveStyle,
  onChange,
  innerRef
}) => (
  <Select
    ref={innerRef}
    inputId={forID}
    isMulti={field.get('multiple')}
    onChange={onChange}
    className={classNameWrapper}
    onFocus={setActiveStyle}
    onBlur={setInactiveStyle}
    styles={reactSelectStyles}
    name="categories"
    getOptionLabel={getOptionLabel(field.get('placeholder'))}
    getOptionValue={identity}
    isClearable
    value={{ value }}
    options={authors.list.map((author) => author.id)}
  />
);

export default React.forwardRef((props, ref) => (
  <Control {...props} innerRef={ref} />
));
