import React from 'react';
import PropTypes from 'prop-types';

const ConsultingLogo = ({ widthPx, color }) => {
  const heightPx = Math.round(widthPx * (28 / 43.45));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${widthPx}px`}
      height={`${heightPx}px`}
      viewBox="0 0 43.45 28"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M29.43 0a14 14 0 0 0-7.71 2.31 14 14 0 1 0-.32 23.59l.32-.21.33.21A14 14 0 1 0 29.43 0zM14 26.1a12.1 12.1 0 1 1 0-24.2 12 12 0 0 1 5.76 1.46L13 7.76a2.8 2.8 0 0 0-1.28 2.36v7.76A2.8 2.8 0 0 0 13 20.24l6.78 4.4A12.06 12.06 0 0 1 14 26.1zm7.73-2.66a.89.89 0 0 1-.5-.15L17 20.54l9.47-6.16V12.3l-11.08 7.2-1.34-.87a.88.88 0 0 1-.41-.75V15.3a.64.64 0 0 1 .26-.47L23 8.91V6.82l-9 5.91a.18.18 0 0 1-.28-.15v-2.46a.88.88 0 0 1 .41-.75l7.16-4.66a1 1 0 0 1 .5-.15.89.89 0 0 1 .5.15l5 3.25-9.73 6.21v2.08L28.8 9l.6.39a.88.88 0 0 1 .41.75v3.57l-9.08 5.89v2.09l9.08-5.9v2.11a.88.88 0 0 1-.41.75l-7.16 4.66a.89.89 0 0 1-.5.13zm7.69 2.66a12.1 12.1 0 0 1-5.75-1.46l6.77-4.4a2.8 2.8 0 0 0 1.28-2.36v-7.76a2.8 2.8 0 0 0-1.28-2.36l-6.77-4.4a12 12 0 0 1 5.76-1.46 12.1 12.1 0 1 1 0 24.2z"
      />
    </svg>
  );
};

ConsultingLogo.defaultProps = {
  widthPx: 43.45,
  color: `#fff`
};

ConsultingLogo.propTypes = {
  widthPx: PropTypes.number,
  color: PropTypes.string
};

export default ConsultingLogo;
