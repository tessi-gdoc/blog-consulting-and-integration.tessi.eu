import React from 'react';
import PropTypes from 'prop-types';
import { cond, equals, always, T } from 'ramda';

import icons from './icons';

const getSize = cond([
  [equals('small'), always({ width: 16, height: 16 })],
  [equals('large'), always({ width: 48, height: 48 })],
  [equals('default'), always({ width: 24, height: 24 })],
  [T, (s) => ({ width: s, height: s })]
]);

const Icon = ({ type, size, color, ...props }) => (
  <svg
    {...getSize(size)}
    viewBox="0 0 24 24"
    stroke={color}
    fill={color}
    {...props}
  >
    <path d={icons[type]} />
  </svg>
);

Icon.defaultProps = {
  size: 'default',
  color: 'rgba(0,0,0,.65)'
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['small', 'default', 'large']),
    PropTypes.number
  ]),
  color: PropTypes.string
};

export default Icon;
