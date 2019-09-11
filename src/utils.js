import * as R from 'ramda';

export const isNotNil = R.complement(R.isNil);

export const capitalize = R.compose(
  R.join``,
  R.juxt([
    R.compose(
      R.toUpper,
      R.head
    ),
    R.tail
  ])
);

export const getId = R.pipe(
  R.toLower,
  R.trim,
  R.replace(
    /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
    ``
  ),
  R.replace(/\s/g, `-`)
);

export const str = JSON.stringify;
