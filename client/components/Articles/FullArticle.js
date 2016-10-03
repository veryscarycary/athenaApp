import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleArticle, toggleEdit } from '../../actions';

const FullArticleContainer = ({ dispatch, article }) => {
  const handleToggle = () => {
    dispatch(toggleArticle());
  }
  const toggleEditModal = () => {
    dispatch(toggleEdit(article));
  }
  return (
    <div className={article.hidden ? "hidden full-article" : "full-article"}>
      <div className="full-article-content">
      <div className="button-float">
        <button
          className="full-article-button"
          onClick={e => {
            e.preventDefault();
            handleToggle(article);
          }} >
          <i className="material-icons">
        close</i></button>
      </div>
      <h3 className="full-article-title main">{article.title}</h3>
      <h5 className="full-article-title">Issue</h5>
      <div className="content">
        {article.issue}
      </div>
      <h5 className="full-article-title">Solution</h5>
      <div className="content">
        {article.solution}
      </div>
      <button
        className="article-list-button"
        onClick={e => {
          e.preventDefault();
          toggleEditModal(article);
        }}
      >Edit</button>
      </div>
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
