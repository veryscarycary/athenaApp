import React from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../actions';

let CreateArticle = ({ dispatch }) => {

  let issuePreview, title, issue, solution;

  return (
    <div className='create-article'>
      <input type='text' placeholder='title' ref={node => {
        title = node;
      }} />
      <input type='text' placeholder='summary' ref={node => {
        issuePreview = node;
      }} />
      <textarea ref={node => { issue=node; }}></textarea>
      <textarea ref={node => { solution=node; }}></textarea>
      <button onClick={e => {
        e.preventDefault();
        if (!title.value.trim() || !abstract.value.trim()) {
          return
        }
        dispatch(createArticle(
          {issuePreview:issuePreview.value,
           title:title.value,
           issue:issue.value,
           solution:solution.value
          }
        ))
        abstract.value = '';
        title.value = '';
        body.value='';
      }}>Create</button>
    </div>
  )
}

CreateArticle = connect()(CreateArticle);

export default CreateArticle;
