import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleArticle, toggleEdit } from '../../actions';
import { EditButtonContainer } from './ButtonContainer';
import { bindActionCreators } from 'redux';
//import ReactMarkdown from 'react-markdown';

export const FullArticleContainer = ({ toggleArticle, article, auth, useOption }) => {
  const handleToggle = () => {
    toggleArticle();
  }
  const permissionToEdit = {
    userPlus: true,
    admin: true,
    user: false,
    guest: false,
  }
  return (
    <div className={article.hidden ? "hidden full-article article-modal" : "full-article"}>
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
      <div

        className="content">{article.issue} </div>
      <h5 className="full-article-title">Solution</h5>
      {auth && auth[0] === 'admin' ? <EditButton /> : null}
     </div>
    </div>
  )
}

let article = {
  mapStateToProps: (state) => ({
    article: state.articleDisplay,
    auth: state.auth.level,
  }),
  mapDispatchToProps: (dispatch) => bindActionCreators({
    toggleArticle,
  }, dispatch),
};

let button = {
  mapStateToProps: (state) => ({
    text: 'edit',
    cssClass: 'article-list-button',
    article: state.articleDisplay,
  }),
  mapDispatchToProps: (dispatch) => bindActionCreators({
    toggleEdit,
  }, dispatch),
}
const EditButton = connect(
  button.mapStateToProps,
  button.mapDispatchToProps
)(EditButtonContainer);

const FullArticle = connect(
  article.mapStateToProps,
  article.mapDispatchToProps
)(FullArticleContainer);

export default FullArticle;
