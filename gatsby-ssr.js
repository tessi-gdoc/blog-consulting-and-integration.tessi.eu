import React from 'react';
import { test } from 'ramda';
import CustomLayout from './wrapPageElement';

export const wrapPageElement = CustomLayout;

export const onRenderBody = ({ pathname, setPostBodyComponents }) => {
  const isDemoPage = test(/^\/demo$/, pathname);
  console.log(pathname);
  console.log(isDemoPage);
  if (isDemoPage) {
    const tenantId = process.env.GATSBY_PLEZI_TENANT_ID,
      contentwebId = process.env.GATSBY_PLEZI_DEMO_ID,
      formId = process.env.GATSBY_PLEZI_DEMO_FORM_ID;

    setPostBodyComponents([
      <script
        key="demo"
        async
        type="text/javascript"
        src={`https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${formId}&form_version=3&content_web_form_id=${contentwebId}`}
      ></script>
    ]);
  }
};
