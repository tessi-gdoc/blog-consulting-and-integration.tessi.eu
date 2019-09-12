import React from 'react';
import { hasPath, test } from 'ramda';
import Layout from './src/components/Layout';

const wrapPageElement = ({ element, props }) => {
  const { pathname } = props.location;
  const isArticle = test(/^\/posts\/[^\n]+/, pathname);
  let seo = {};
  if (
    isArticle &&
    hasPath(['props', 'data', 'markdownRemark', 'frontmatter'], element)
  ) {
    const {
      title,
      description,
      image,
      authors,
      date
    } = element.props.data.markdownRemark.frontmatter;
    const authorNames = authors.map(a => `${a.firstname} ${a.lastname}`);
    seo = {
      seo: {
        title,
        description,
        authors: authorNames,
        publishDate: date,
        article: true,
        ...(image ? { image: image.childImageSharp.original.src } : {})
      }
    };
  }
  return (
    <Layout {...props} {...seo}>
      {element}
    </Layout>
  );
};

export default wrapPageElement;
