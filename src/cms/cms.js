import React from 'react';
import CMS from 'netlify-cms-app';

import BlogPostPreview from './preview-templates/BlogPostPreview';

import StyleInjector from './StyleInjector';
import { GlobalStyles } from '../components/Layout';
import Control from './custom-widgets/AuthorWidget';

const Preview = ({ value }) => {
  const display = value
    ? value.map((item) => item.get('label')).join(', ')
    : '';
  return <p>{display}</p>;
};

CMS.registerWidget({
  name: 'author-select',
  controlComponent: Control,
  previewComponent: Preview
});

CMS.registerEditorComponent({
  id: 'banner',
  label: 'Bannière',
  fields: [
    { name: 'link', label: 'Lien externe', widget: 'string' },
    {
      name: 'image',
      label: 'Image',
      widget: 'image',
      media_library: {
        allow_multiple: false
      }
    },
    { name: 'alt', label: 'Alt', widget: 'string' },
    { name: 'title', label: 'Titre', widget: 'string' }
  ],
  pattern: /^\[!\[(.*)\]\((.*?)(\s"(.*)")?\)\]\((.*)\)$/,
  fromBlock: (match) =>
    match && {
      image: match[2],
      alt: match[1],
      title: match[4],
      link: match[5]
    },
  toBlock: ({ alt, image, title, link }) =>
    `[![${alt || ''}](${image || ''}${
      title ? ` "${title.replace(/"/g, '- ')}"` : ''
    })](${link})`,
  toPreview: ({ alt, image, title, link }, getAsset, fields) => {
    const imageField = fields?.find((f) => f.get('widget') === 'image');
    const src = getAsset(image, imageField);
    return `<a href="${link}" target="_blank" rel="noopener noreferrer"><img src="${src}" alt="${alt}" title="${title}"/></a>`;
  }
});

CMS.registerPreviewTemplate('blog', (props) => (
  <StyleInjector>
    <GlobalStyles />
    <BlogPostPreview {...props} />
  </StyleInjector>
));

CMS.init();
