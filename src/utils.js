import { complement, isNil, pipe, toLower, trim, replace } from 'ramda';

export const isNotNil = complement(isNil);

export const getId = pipe(
  toLower,
  trim,
  replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, ``),
  replace(/\s/g, `-`)
);

export const str = JSON.stringify;
