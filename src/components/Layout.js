import React from 'react';
import { Global, css } from '@emotion/core';

import SEO from './SEO';
import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';

import { primary, secondary } from '@colors';

export const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      ul,
      ol {
        list-style-position: inside;
        padding-left: 12px;
      }
      ul > li {
        position: relative;
        padding-left: 25px;
        list-style: none;
        margin-bottom: 24px;
        &:before {
          content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxOSIgdmlld0JveD0iMCAwIDEyIDE5Ij4KICAgIDxwYXRoIGZpbGw9IiNFRTVEODQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTAgOS40MjJMMTEuMzQzIDB2OS40MjJMMCAxOC44NDR6Ii8+Cjwvc3ZnPgo=');
          display: inline-block;
          width: 12px;
          height: 19px;
          position: absolute;
          top: 8px;
          left: 0;
        }
      }
      table {
        border-spacing: 0;
        padding: 15px 30px 30px;
        background-color: rgba(40, 39, 77, 0.04);
        margin: 40px 0 60px;
        border-collapse: separate;
        width: 100%;
        max-width: 860px;

        @media (max-width: 550px) {
          padding: 0;
        }

        & tr,
        td,
        th {
          border-top: none;
          padding: 8px;
          border-bottom: 1px dotted #777780;
          text-align: left;
          font-size: 14px;
        }
      }
      textarea {
        resize: none;
        min-height: 150px;
      }
      * {
        box-sizing: border-box;
        -webkit-overflow-scrolling: touch;
      }
      html {
        overflow-x: hidden;
        overflow-y: scroll;
        -webkit-text-size-adjust: 100%;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: 100%;
        font-family: 'Montserrat', '-apple-system', 'BlinkMacSystemFont',
          'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', 'sans-serif';
      }
      body {
        overflow-x: hidden;
        color: ${primary};
        font-weight: 400;
        font-size: 15px;
        font-kerning: normal;
        line-height: 1.6;
        font-style: normal;
        min-height: 100vh;
        word-wrap: break-word;
        text-rendering: optimizelegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga' on;
      }
      blockquote {
        margin-left: 0;
        margin-right: 1.6rem;
        margin-top: 1.6rem;
        padding-bottom: 0;
        padding-left: 0.8rem;
        padding-right: 0;
        padding-top: 0;
        margin-bottom: 1.6rem;
        border-left: 0.4rem solid hsla(291, 0%, 18%, 0.1);
        color: hsla(291, 0%, 18%, 0.8);
        font-style: italic;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 0;
        line-height: 1.15;
        font-weight: 500;
        text-rendering: optimizeLegibility;
      }
      h1 {
        margin: 0 0 0.5em 0;
        font-size: 3.25rem;
        font-weight: 600;
      }
      @media (max-width: 720px) {
        h1 {
          font-size: 2.1rem;
        }
      }
      h2 {
        margin: 1.5em 0 1.25em 0;
        font-size: 1.6rem;
        font-weight: 600;
      }
      @media (max-width: 720px) {
        h2 {
          font-size: 1.4rem;
        }
      }
      h3 {
        margin: 1.5em 0 0.5em 0;
        font-size: 1.4rem;
      }
      @media (max-width: 720px) {
        h3 {
          font-size: 1.2rem;
        }
      }
      h4,
      h5,
      h6 {
        margin: 1.5em 0 0.5em 0;
        font-size: 1.2rem;
      }

      a {
        color: ${primary};
        font-weight: 700;
        text-decoration: none;
        &:hover,
        &:focus {
          text-decoration: underline;
          color: ${secondary};
        }
      }
      *::-webkit-scrollbar {
        width: 6px;
      }
      *::-webkit-scrollbar-track {
        background: #eee;
      }
      *::-webkit-scrollbar-thumb {
        background-color: #ccc;
      }
      [data-whatintent='mouse'] *:focus {
        outline: none;
      }
      input,
      select,
      textarea {
        border: 1px solid rgba(218, 218, 218, 0.75);
        font: inherit;
        border-radius: 3px;
        width: 100%;
        padding: 10px 20px;
        color: #aeaeb2;
        line-height: 2;

        &:focus {
          border-color: ${primary};
          color: ${primary};
        }
      }
      textarea {
        &:after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background-image: linear-gradient(
            to right,
            #9b9ba0 10%,
            transparent 0%
          );
          background-position: top;
          background-size: 6px 1px;
          background-repeat: repeat-x;
          position: absolute;
          top: auto;
          left: 0;
          bottom: 0;
        }
      }
      .control-group {
        margin: 1.25em 0;
        .control-label {
          font-weight: bold;
        }
      }
      label.checkbox {
        display: block;
        cursor: pointer;
        & > input {
          border: 0;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          white-space: nowrap;
          width: 1px;
          & + span {
            display: flex;
            flex-wrap: nowrap;
          }
          & + span:before {
            content: '✓';
            color: white;
            font-weight: bold;
            flex: 0 0 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 14px;
            height: 14px;
            border-radius: 3px;
            border: 1px solid ${primary};
            margin: 0 8px 0 2px;
            transition: box-shadow 150ms;
          }
          &:checked + span:before {
            background: ${secondary};
            border: 1px solid transparent;
            box-shadow: 0 0 0 2px pink;
          }
        }
      }
      .headroom {
        padding: 1.5rem 0.75rem;
        user-select: none;
        background-color: white;
        z-index: 3 !important;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      }
      .ReactModal__Content {
        opacity: 0.01;
        transform: scale(0.9) translateY(-100%);
        transition: all 300ms ease-in-out;
      }
      .ReactModal__Content--after-open {
        opacity: 1;
        transform: scale(1) translateY(0%);
      }
      .ReactModal__Content--before-close {
        opacity: 0.01;
        transform: scale(0.9) translateY(-100%);
      }
      .gatsby-remark-code-title {
        padding: 0.5em 1em;
        background-color: ${secondary};
        color: white;
        z-index: 0;

        border-top-left-radius: 0.3em;
        border-top-right-radius: 0.3em;
      }

      code[class*='language-'],
      pre[class*='language-'],
      .frame-content pre,
      .frame-content pre > code {
        color: white;
        background: none;
        font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New,
          monospace;
        font-feature-settings: normal;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;
        margin-bottom: 0;
        tab-size: 4;
        hyphens: none;
      }

      /* Code blocks */
      pre[class*='language-'] {
        overflow: auto;
        padding: 1.3125rem;
      }

      pre[class*='language-']::selection {
        text-shadow: none;
        background: hsl(207, 4%, 16%);
      }

      pre[class*='language-'] ::selection {
        text-shadow: none;
        background: hsla(0, 0%, 100%, 0.15);
      }

      /* Inline code */
      :not(pre) > code[class*='language-'] {
        border-radius: 0.3em;
        background: ${secondary};
        color: white;
        padding: 0.15em 0.2em 0.05em;
        white-space: normal;
      }

      .token.attr-name {
        color: rgb(173, 219, 103);
        font-style: italic;
      }

      .token.comment {
        color: rgb(128, 147, 147);
      }

      .token.string,
      .token.url {
        color: rgb(173, 219, 103);
      }

      .token.variable {
        color: rgb(214, 222, 235);
      }

      .token.number {
        color: rgb(247, 140, 108);
      }

      .token.builtin,
      .token.char,
      .token.constant,
      .token.function {
        color: rgb(130, 170, 255);
      }

      .token.punctuation {
        color: rgb(199, 146, 234);
      }

      .token.selector,
      .token.doctype {
        color: rgb(199, 146, 234);
        font-style: 'italic';
      }

      .token.class-name {
        color: rgb(255, 203, 139);
      }

      .token.tag,
      .token.operator,
      .token.keyword {
        color: #ffa7c4;
      }

      .token.boolean {
        color: rgb(255, 88, 116);
      }

      .token.property {
        color: rgb(128, 203, 196);
      }

      .token.namespace {
        color: rgb(178, 204, 214);
      }

      pre[data-line],
      .frame-content pre {
        padding: 1em 0 1em 3em;
        position: relative;
      }

      .gatsby-highlight-code-line,
      .frame-content pre {
        background-color: hsla(207, 95%, 15%, 1);
        display: block;
        padding-right: 1em;
        padding-left: 1.25em;
        border-left: 0.25em solid #ffa7c4;
      }

      .gatsby-highlight {
        margin-bottom: 1.75rem;
        padding: 1em;
        background: #011627;
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      .gatsby-highlight pre[class*='language-'].line-numbers {
        padding: 0;
        padding-left: 2.8em;
        overflow: initial;
      }

      @media (max-width: 672px) {
        .gatsby-highlight {
          border-radius: 0;
        }
      }

      .gatsby-highlight pre[class*='language-'] {
        float: left;
        min-width: 100%;
      }

      .gatsby-resp-image-wrapper {
        margin: 2.5rem auto;
      }
    `}
  />
);

export const LocaleContext = React.createContext();

const Layout = ({
  children,
  location: { pathname },
  seo,
  pageContext: { locale }
}) => {
  const [open, toggleNewsletter] = React.useState(false);
  return (
    <LocaleContext.Provider value={locale}>
      <SEO lang={locale} pathname={pathname} {...seo} />
      <GlobalStyles />
      <Newsletter isOpen={open} onClose={() => toggleNewsletter(false)} />
      <div
        css={css`
          position: relative;
          height: 100%;
        `}
      >
        <Navbar openNewsletter={() => toggleNewsletter(true)} />
        <main>{children}</main>
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
};

export default Layout;
