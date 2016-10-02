import React from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../actions';
import uuid from 'uuid';

let CreateArticle = ({ dispatch }) => {

  let issuePreview, title, issue, solution;

  return (
    <div className='create-article'>
      <input
        type='text'
        placeholder='title'
        ref={node => {
          title = node;
      }} />
      <input type='text'
        placeholder='summary'
        ref={node => {
          issuePreview = node;
      }} />
      <textarea
        placeholder='issue'
        ref={node => { issue=node; }}></textarea>
      <textarea
        placeholder='solution'
        ref={node => { solution=node; }}></textarea>
      <button onClick={e => {
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
  )
}

CreateArticle = connect()(CreateArticle);

export default CreateArticle;
