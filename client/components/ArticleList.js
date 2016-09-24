import React from 'react';

const ArticleList = ({ articles }) => (
  <div className="article-list">
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <h3>{article.title}</h3>
          <div>{article.abstract}</div>
        </li>
      ))}
    </ul>

  </div>
)

export default ArticleList;
