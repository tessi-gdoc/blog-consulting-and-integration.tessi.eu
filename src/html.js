import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const CookiesBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15px;
  width: 100%;
  z-index: 999;
  background-color: rgba(52, 64, 81, 0.88);
  align-items: center;
  justify-content: space-between;
`;

const CookiesMessage = styled.div`
  font-weight: 500;
  color: white;
  text-align: left;
`;

const CookiesButtons = styled.div`
  & > button {
    padding: 0px 8px;
    margin: 6px;
    background: transparent none repeat scroll 0% 0%;
    border: 2px solid white;
    border-radius: 4px;
    box-shadow: none;
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    width: 66px;
    height: 32px;
    opacity: 1;
    &:hover {
      background: #fff;
      color: rgb(52, 64, 81);
    }
  }
`;

const CookiesMoreLink = styled(Link)`
  color: white;
  border-bottom: 2px solid white;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;

const cookiesText = `Nous utilisons des cookies pour vous garantir la meilleure expérience sur notre site et pour répondre à nos besoins statistiques et de mesure d’audience.`;

const tenantId = process.env.GATSBY_PLEZI_TENANT_ID,
  demoId = process.env.GATSBY_PLEZI_DEMO_ID,
  demoFormId = process.env.GATSBY_PLEZI_DEMO_FORM_ID,
  newsletterId = process.env.GATSBY_PLEZI_NEWSLETTER_ID,
  newsletterFormId = process.env.GATSBY_PLEZI_NEWSLETTER_FORM_ID,
  gtmId = process.env.GATSBY_GTM_ID,
  twId = process.env.GATSBY_PLEZI_TW_ID;

const trackingScript = `var w = window, 
d = document, 
s = "script", 
l = "dataLayer", 
i = "${gtmId}"; 
w[l] = w[l] || []; 
w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" }); 
var f = d.getElementsByTagName(s)[0], 
    j = d.createElement(s), 
    dl = l != "dataLayer" ? "&l=" + l : ""; 
j.async = true; 
j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl; 
f.parentNode.insertBefore(j, f); 
var p = d.createElement(s); 
p.type = "text/javascript"; 
p.async = true; 
p.src = "https://app.plezi.co/scripts/ossleads_analytics.js?tenant=${tenantId}&tw=${twId}"; 
f.parentNode.insertBefore(p, f);
`;

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  body,
  preBodyComponents,
  postBodyComponents
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="application-name" content="Tessi#Journey" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#1a214d" />
      <meta name="apple-mobile-web-app-title" content="Tessi#Journey" />
      <link rel="icon" type="image/svg" href="/icons/favicon.svg" />
      {headComponents}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <noscript key="noscript" id="gatsby-noscript">
        <iframe
          title="google-tag-manager"
          sandbox="true"
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: `none`, visibility: `hidden` }}
        />
      </noscript>
      <CookiesBanner id="cookies-eu-banner" style={{ display: `none` }}>
        <CookiesMessage>
          {cookiesText}{' '}
          <CookiesMoreLink to="/notices/cookies" id="cookies-eu-more">
            Lire notre gestion des cookies
          </CookiesMoreLink>
        </CookiesMessage>
        <CookiesButtons>
          <button type="button" aria-label="Reject" id="cookies-eu-reject">
            Rejeter
          </button>
          <button type="button" aria-label="Accept" id="cookies-eu-accept">
            Accepter
          </button>
        </CookiesButtons>
      </CookiesBanner>
      <div
        key="body"
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <script defer async type="text/javascript" src="/jquery.min.js" />
      <script type="text/javascript" src="/cookies-eu-banner.js" />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `new CookiesEuBanner(function() {${trackingScript}}, true)`
        }}
      />
      <script
        async
        type="text/javascript"
        src={`https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}&form_id=${demoFormId}&form_version=3&content_web_form_id=${demoId}`}
      ></script>
      <script
        async
        type="text/javascript"
        src={`https://app.plezi.co/scripts/ossleads_forms.js?tenant_id=${tenantId}c&form_id=${newsletterFormId}&form_version=3&content_web_form_id=${newsletterId}`}
      ></script>
      {postBodyComponents}
    </body>
  </html>
);

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};

export default HTML;
