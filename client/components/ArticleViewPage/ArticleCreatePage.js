import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createArticle } from '../../actions';

const ArticleCreatePageContainer = ({createArticle, history}) => {
  let title, issuePreview, issue, solution;
  const handleSubmit = (article) => {
    createArticle(article)
      .then(resp => history.push(`/articles/${resp.value[0].id}`))
  }
  return (
    <div className='article-list-container'>
    <div className='article-create'>
      <h3 className="title">Create new article</h3>
      <h3 className="subtitle">Title</h3>
      <input
        placeholder="eg. How to troubleshoot a network connection"
        className="edit-modal-input"
        ref={node => title=node}
      />
      <h5 className="subtitle">Summary</h5>
      <input
        placeholder="brief summary of the problem"
        ref={node => issuePreview=node}
        className="edit-modal-input" />
      <h5 className="subtitle">Issue</h5>
      <textarea
        placeholder="detailed description of the problem"
        ref={node => issue=node}
        className="edit-modal-textarea" />
      <h5 className="subtitle">Solution</h5>
      <textarea
        placeholder="describe how you solved the problem"
        ref={node => solution=node}
        className="edit-modal-textarea" />
       <div className='button-right-float'>
       <button
        onClick={() => {
          let article = {
              title: title.value,
              issuePreview: issuePreview.value,
              issue: issue.value,
              solution: solution.value,
          }
          handleSubmit(article);
        }}
        className="article-list-button">
          submit
       </button>
       </div>
       </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  createArticle,
}, dispatch);

const ArticleCreatePage = connect(
  () => ({}),
  mapDispatchToProps
)(ArticleCreatePageContainer)

export default ArticleCreatePage;
