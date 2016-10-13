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
    <div>
      <h3 className="full-article-title main">Create new article</h3>
      <input
        className="edit-modal-input"
        ref={node => title=node}
      />
      <h5 className="full-article-title">Summary</h5>
      <input
        ref={node => issuePreview=node}
        className="edit-modal-input" />
      <h5 className="full-article-title">Issue</h5>
      <textarea
        ref={node => issue=node}
        className="edit-modal-textarea" />
      <h5 className="full-article-title">Solution</h5>
      <textarea
        ref={node => solution=node}
        className="edit-modal-textarea" />
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
