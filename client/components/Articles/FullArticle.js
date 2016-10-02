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
      <button
        onClick={e => {
          e.preventDefault();
          handleToggle(article);
        }} >
        Close</button>
      <h3>{article.title}</h3>
      <h5>Issue</h5>
      <div className="content">
        {article.issue}
      </div>
      <h5>Solution</h5>
      <div className="content">
        {article.solution}
      </div>
      <button>Use</button>
      <button
        onClick={e => {
          e.preventDefault();
          toggleEditModal(article);
        }}
      >Edit</button>
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
