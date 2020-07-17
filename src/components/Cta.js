import React from 'react';
import PropTypes from 'prop-types';
import Link from './LocalizedLink';
import { pipe, cond, equals, always, T } from 'ramda';

import { secondary, primary } from '@colors';
import { Tablet } from '@media';
import { isNotNil } from '@utils';

export const enumTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SECONDARY_BORDERED: 'secondary bordered',
  GRADIENT: 'gradient'
};

const getBasicStyle = (width) => ({
  display: `inline-block`,
  fontFamily: `inherit`,
  fontSize: `inherit`,
  fontWeight: 600,
  backgroundColor: `transparent`,
  userSelect: `none`,
  cursor: `pointer`,
  textAlign: `center`,
  padding: 0,
  textTransform: `uppercase`,
  lineHeight: `43px`,
  width: `100%`,
  height: 48,
  outline: `none`,
  position: `relative`,
  borderWidth: 3,
  borderStyle: `solid`,
  borderColor: `transparent`,
  borderRadius: 23,
  overflow: `hidden`,
  transition: `color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out`,
  '&:hover, &:focus': { textDecoration: `none` },
  [Tablet]: { width }
});

const findStyleWithType = cond([
  [
    equals(enumTypes.PRIMARY),
    always({
      color: `white`,
      backgroundColor: primary,
      '&:hover, &:focus': {
        backgroundColor: `transparent`,
        borderColor: primary,
        color: primary
      }
    })
  ],
  [
    equals(enumTypes.SECONDARY),
    always({
      color: `white`,
      backgroundColor: secondary,
      '&:hover, &:focus': {
        backgroundColor: `transparent`,
        borderColor: secondary,
        color: secondary
      }
    })
  ],
  [
    equals(enumTypes.SECONDARY_BORDERED),
    always({
      color: secondary,
      borderColor: secondary,
      '&:hover, &:focus': {
        backgroundColor: secondary,
        borderColor: `transparent`,
        color: `white`
      }
    })
  ],
  [
    equals(enumTypes.GRADIENT),
    always({
      color: secondary,
      borderStyle: `double`,
      backgroundColor: `white`,
      backgroundImage: `linear-gradient(white, white), radial-gradient(
        circle at top left,
        #3e6aae 0%,
        #447dbc 20%,
        #86589d 40%,
        #df6584 80%,
        #e58b90 100%
        )`,
      backgroundOrigin: `border-box`,
      backgroundClip: `content-box, border-box`
    })
  ],
  [
    T,
    always({
      color: primary,
      backgroundColor: `white`,
      '&:hover, &:focus': {
        backgroundColor: `transparent`,
        borderColor: `white`,
        color: `white`
      }
    })
  ]
]);

const getWidth = cond([
  [equals('small'), always(`auto`)],
  [equals('large'), always(250)],
  [equals('x-large'), always(400)],
  [T, always(200)]
]);

const getStyle = pipe(getWidth, getBasicStyle);

const Cta = ({ link, size, type, children, htmltype, ...rest }) => {
  const css = [getStyle(size), findStyleWithType(type)];
  const render = (content) =>
    !link ? (
      <button type={htmltype} {...rest} aria-label={content} css={css}>
        {content}
      </button>
    ) : `/` === link.substring(0, 1) ? (
      <Link to={link} name={content} title={content} {...rest} css={css}>
        {content}
      </Link>
    ) : (
      <a
        name={content}
        title={content}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
        css={css}
      >
        {content}
      </a>
    );

  return isNotNil(children) ? render(children) : render;
};

Cta.defaultProps = {
  link: undefined,
  type: undefined,
  size: `default`
};

Cta.propTypes = {
  link: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large', 'x-large']),
  type: PropTypes.oneOf(Object.values(enumTypes)),
  children: PropTypes.node
};

export default Cta;
