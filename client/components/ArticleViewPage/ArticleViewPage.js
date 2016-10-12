import React from 'react';
import Article from './Article';

const ArticleViewPage = ({params}) => (
  <Article id={ params.id } />
)

export default ArticleViewPage
