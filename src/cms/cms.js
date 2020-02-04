import CMS from 'netlify-cms-app';
import { Widget as FileRelationWidget } from '@ncwidgets/file-relation';

CMS.registerWidget(FileRelationWidget);

CMS.init();
