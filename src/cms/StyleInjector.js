import React from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';

const StyleInjector = ({ children }) => {
  const [cache, setCache] = React.useState(null);

  React.useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setCache(createCache({ container: iframeHeadElem }));
  }, []);

  if (!cache) return null;
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default StyleInjector;
