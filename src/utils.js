import {
  complement,
  isNil,
  pipe,
  split,
  without,
  last,
  toLower,
  trim,
  replace
} from 'ramda';
import camelCase from 'lodash.camelcase';

export const isNotNil = complement(isNil);

export const getId = pipe(
  toLower,
  trim,
  replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, ``),
  replace(/\s/g, `-`)
);

export const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

export const str = JSON.stringify;

export const parsePath = pipe(split(`/`), without([``]), last, camelCase);

export const getTags = (edges, group) =>
  group.reduce((acc, tag) => {
    const idx = acc.findIndex((node) => node === tag.fieldValue);
    acc[idx] = tag;
    return acc;
  }, Object.keys(edges));
