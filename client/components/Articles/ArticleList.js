import React from 'react';
import { connect } from 'react-redux';

const ArticleListItems = ({ articles }) => (
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

const mapStateToProps = (state) => {
  return {
    articles: state.articlesList
  }
}

const ArticleList = connect(
  mapStateToProps
)(ArticleListItems);

export default ArticleList;
