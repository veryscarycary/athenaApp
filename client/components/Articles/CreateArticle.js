import React from 'react';
import { connect } from 'react-redux';
import { createArticle } from '../../actions';

let CreateArticle = ({ dispatch }) => {

  let abstract;
  let title;

  return (
    <div className='create-article'>
      <input type='text' placeholder='title' ref={node => {
        title = node;
      }} />
      <input type='text' placeholder='abstract' ref={node => {
        abstract = node;
      }} />
      <button onClick={e => {
        e.preventDefault();
        if (!title.value.trim() || !abstract.value.trim()) {
          return
        }
        dispatch(createArticle({abstract: abstract.value, title: title.value }))
        abstract.value = '';
        title.value = '';
      }}>Create</button>
    </div>
  )
}

CreateArticle = connect()(CreateArticle);

export default CreateArticle;
