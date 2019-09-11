import React from 'react';
import PropTypes from 'prop-types';

import { primary } from '@colors';

const Brand = ({ width, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={width * 0.32}
    viewBox="0 0 180 58"
    version="1"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={color}
        d="M11 41V23h11v-9H11V0L0 7v35c0 9 6 16 18 16h4V48l-3 1c-6 0-8-3-8-8M167 58l13-7V14h-13zM40 31c1-6 5-10 11-10 5 0 9 4 10 10H40zm11-18c-13 0-22 9-22 23 0 13 8 22 21 22s19-7 21-14H60c-1 3-3 5-9 5s-10-4-11-11h31v-2c0-14-7-23-20-23zM97 21c5 0 7 2 8 6h9c0-9-6-14-17-14s-18 5-18 13c0 18 25 11 25 19 0 3-2 5-8 5s-8-2-8-6H78c0 9 6 14 18 14s19-5 19-13c0-18-25-11-25-19 0-3 2-5 7-5zM142 21c5 0 7 2 8 6h9c0-9-6-14-17-14s-18 5-18 13c0 18 25 11 25 19 0 3-2 5-8 5s-8-2-8-6h-10c0 9 6 14 18 14s19-5 19-13c0-18-25-11-25-19 0-3 2-5 7-5z"
      />
      <path d="M0 58h180V0H0z" />
      <path fill={color} d="M167 9h13V0h-13z" />
    </g>
  </svg>
);

Brand.defaultProps = {
  width: 98,
  color: primary
};

Brand.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string
};

export default Brand;
