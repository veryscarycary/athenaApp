import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getArticle } from '../../actions';

const FullArticleContainer = ({ dispatch, article }) => {
  const handleToggle = (article) => {
    dispatch(getArticle(article.id));
  }
  return (
    <div className={article.hidden ? "hidden full-article" : "full-article"}>
      <button
        onClick={e => {
          e.preventDefault();
          handleToggle(article);
        }} >
        Close</button>
      <h3>{article.title}</h3>
      <div className="content">
        {article.issue}
        {article.solution}
      </div>
      <button>Use</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    article: state.articleDisplay
  }
}

const FullArticle = connect(
  mapStateToProps
)(FullArticleContainer);

export default FullArticle;
