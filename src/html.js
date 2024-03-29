import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import { primary } from '@colors';

import { displayName } from '../package.json';

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
    margin: 6px;
    background: transparent none repeat scroll 0% 0%;
    border: 2px solid white;
    border-radius: 4px;
    box-shadow: none;
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
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
      <meta name="application-name" content={displayName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content={primary} />
      <meta name="apple-mobile-web-app-title" content={displayName} />
      <link rel="shortcut icon" href="/icons/favicon.png" />
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
