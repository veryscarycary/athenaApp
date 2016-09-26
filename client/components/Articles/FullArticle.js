import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleArticleDisplay } from '../../actions';

const FullArticleContainer = ({ dispatch, article }) => {
  const handleToggle = (article) => {
    console.log(article);
    dispatch(toggleArticleDisplay(article));
  }
  return (
    <div className={article.hidden ? "hidden full-article" : "full-article"}>
      <button
        onClick={e => {
          e.preventDefault();
          handleToggle(article);
        }}
      >Close</button>
      <h3>{article.title}</h3>
      <div className="content">
        {article.body}
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
