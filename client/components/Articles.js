import React from  'react';
import { Link } from 'react-router';
import Search from './Search';
import ArticleList from './ArticleList';
import articleStubs from '../mock/articleStubs';

const Articles = () => (
  <div>
    <h1>Articles</h1>
    <div className="nav">
      <Link to='/'>Home</Link>
      <ArticleList articles={articleStubs} />
    </div>
  </div>
);

export default Articles;
