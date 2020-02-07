import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplatePreview } from '../../templates/blog-post';

const matchHeadings = md => md.match(/(#+\s*)(.*)/g) || [];

const getHeadingDepth = line => line.match(/^(?:#+)/)[0].length;

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => {
  const [imageData, setImageData] = React.useState('');

  const headings = matchHeadings(entry.getIn(['data', 'body']))
    .filter(h => /^#{1,2}\s/.test(h))
    .map(str => ({
      depth: getHeadingDepth(str),
      value: str.replace(/[*#_]/g, '').trim()
    }));

  React.useEffect(() => {
    const fetchAsset = () => {
      const imagePath = entry.getIn(['data', 'image']);
      imagePath &&
        getAsset(imagePath).then(value => {
          setImageData(value.toString());
        });
    };
    fetchAsset();
  }, [entry, getAsset]);
  const data = {
    markdownRemark: {
      frontmatter: {
        path: entry.getIn(['data', 'path']),
        introduction: entry.getIn(['data', 'introduction']),
        date: new Date(entry.getIn(['data', 'date'])).toLocaleString('fr', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }),
        title: entry.getIn(['data', 'title']),
        author: entry.getIn(['data', 'author']),
        image: imageData,
        imageAlt: entry.getIn(['data', 'imageAlt']),
        tags: entry.getIn(['data', 'tags']).toJS()
      },
      headings,
      html: widgetFor('body')
    }
  };
  return <BlogPostTemplatePreview data={data} />;
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
