import React from 'react';
import CMS from 'netlify-cms-app';
import { Widget as FileRelationWidget } from '@ncwidgets/file-relation';

import BlogPostPreview from './preview-templates/BlogPostPreview';

import StyleInjector from './StyleInjector';
import { GlobalStyles } from '../components/Layout';

CMS.registerWidget(FileRelationWidget);

CMS.registerPreviewTemplate('blog', props => (
  <StyleInjector>
    <GlobalStyles />
    <BlogPostPreview {...props} />
  </StyleInjector>
));
