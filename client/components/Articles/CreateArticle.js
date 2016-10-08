import React from 'react';
import { connect } from 'react-redux';
import { createArticle, toggleCreate } from '../../actions';
import uuid from 'uuid';

export const CreateArticleModal = ({ dispatch, hidden }) => {
  const handleToggle = () => {
    dispatch(toggleCreate());
  }

  let issuePreview, title, issue, solution;

  return (
    <div className={hidden ? "full-article hidden" : "full-article"}>
    <div className='create-article-container'>
    <div className="button-float">
      <button
        className="full-article-button"
          onClick={handleToggle}>
          <i className="material-icons">close</i></button>
        </div>

    <h1
      className="full-article-title main">Create a new article</h1>
      <h5
        className="full-article-title"
      >Title:</h5>
      <input
        className="edit-modal-input"
        type='text'
        name='title'
        placeholder='title'
        ref={node => {
          title = node;
      }} />
      <h5
        className="full-article-title"
      >Summary:</h5>
      <input type='text'
        name='summary'
        className="edit-modal-input"
        placeholder='summary'
        ref={node => {
          issuePreview = node;
      }} />
      <h5
        className="full-article-title"
      >Issue:</h5>
      <textarea
        name='issue'
        className="edit-modal-textarea"
        placeholder='issue'
        ref={node => { issue=node; }}></textarea>
      <h5
        className="full-article-title"
      >Solution:</h5>
      <textarea
        name='solution'
        className="edit-modal-textarea"
        placeholder='solution'
        ref={node => { solution=node; }}></textarea>
      <button
      className="article-list-button"
      onClick={e => {
        e.preventDefault();

        if (!title.value.trim() || !solution.value.trim() || !issuePreview.value.trim() || !issue.value.trim()) {
          return
        }
        dispatch(createArticle(
          {issuePreview:issuePreview.value,
           title:title.value,
           issue:issue.value,
           solution:solution.value,
        // TODO:
        // relatedTicket: ticket,
        // authorId: user.id
          }
        ))
        issuePreview.value='';
        title.value='';
        solution.value='';
        issue.value='';
      }}>Create</button>
    </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  hidden: state.create.hidden
})

const CreateArticle = connect(
  mapStateToProps
)(CreateArticleModal);

export default CreateArticle;
