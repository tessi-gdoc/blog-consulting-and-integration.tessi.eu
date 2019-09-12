import React from 'react';
import CustomLayout from './wrapPageElement';

export const wrapPageElement = CustomLayout;

export const onRenderBody = ({ setPostBodyComponents }) => {
  const {
    GATSBY_PLEZI_TENANT_ID: tenantId,
    GATSBY_PLEZI_DEMO_ID: demoId,
    GATSBY_PLEZI_DEMO_FORM_ID: demoFormId,
    GATSBY_PLEZI_NEWSLETTER_ID: newsletterId,
    GASTBY_PLEZI_NEWSLETTER_DEMO_ID: newsletterFormId
  } = process.env;

  setPostBodyComponents([
    <script
      key="demo"
      async
      type="text/javascript"
      src={`https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${demoFormId}&form_version=3&content_web_form_id=${demoId}`}
    ></script>,
    <script
      key="newsletter"
      async
      type="text/javascript"
      src={`https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}c&form_id=${newsletterFormId}&form_version=3&content_web_form_id=${newsletterId}`}
    ></script>
  ]);
};
