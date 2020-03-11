import React from 'react';
import Select from 'react-select';
import { identity } from 'ramda';
import { reactSelectStyles } from 'netlify-cms-ui-default/dist/esm/styles';

import authors from '../../data/author.json';

const getOptionLabel = option => {
  const selected = option?.value ?? option;
  const maybeOption = authors.list.find(author => author.id === selected);
  return maybeOption
    ? maybeOption.fullname
    : 'Auteur inconnu (voir "configuration/auteurs")';
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
}) => {
  return (
    <div>
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
        getOptionLabel={getOptionLabel}
        getOptionValue={identity}
        isClearable={false}
        value={{ value }}
        options={authors.list.map(author => author.id)}
        placeholder={field.get('placeholder')}
      />
    </div>
  );
};
export default React.forwardRef((props, ref) => (
  <Control {...props} innerRef={ref} />
));
