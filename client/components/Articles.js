import React from  'react';
import { Link } from 'react-router';
import Search from './Search';

const Articles = () => (
  <div>
    <h1>Articles</h1>
    <div className="nav">
      <Link to='/'>Home</Link>
    </div>
  </div>
);

export default Articles;
