import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticle } from '../../actions';

const ArticleModalContainer = ({ article, getArticle }) => {
  const handleToggle = (article) => {
    getArticle(article.id);
  }
  return (
    <div>
      <button
        data-toggle="collapse"
        data-target={`#articleModal${article.id}`}
        onClick={e => {
          e.preventDefault();
          console.log(article)
          handleToggle(article);
        }} >
        Close</button>
      <h3>{article.title}</h3>
      <div className="content">
        <strong>Issue:</strong>
        {article.issue}<br /><br />
        <strong>Solution:</strong>
        {article.solution}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticle,
}, dispatch)

const ArticleModal = connect(
  () => ({}),
  mapDispatchToProps,
)(ArticleModalContainer);

export default ArticleModal;
