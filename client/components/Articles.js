import React from  'react';
import { Link } from 'react-router';
import Search from './Search';
import CreateArticle from './CreateArticle';
import ArticleList from './ArticleList';
import ArticleListItems from '../containers/ArticleListItems'

const Articles = () => (
  <div>
    <h1>Articles</h1>
    <div className="nav">
      <Link to='/'>Home</Link>
    </div>
    <CreateArticle />
    <ArticleListItems />
  </div>
);

export default Articles;
