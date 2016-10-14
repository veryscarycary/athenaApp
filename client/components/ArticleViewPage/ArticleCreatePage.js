import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createArticle } from '../../actions';

const ArticleCreatePageContainer = ({createArticle, history, authorId, products}) => {
  let title, issuePreview, issue, solution, product;
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
      <select name='product'
        ref={node=>product=node}>
        <option value={products[0]}>{products[0]}</option>
        <option value={products[1]}>{products[1]}</option>
        <option value={products[2]}>{products[2]}</option>
        <option value={products[3]}>{products[3]}</option>
      </select>
       <button
        onClick={() => {
          var selectedProduct = product.options[product.options.selectedIndex].value;
          let article = {
              title: title.value,
              authorId: authorId,
              product: selectedProduct,
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

const mapStateToProps = state => ({
  products: ['camera','printer','computer','monitor'],
  authorId: state.userReducer.currentUser._id,
})

const ArticleCreatePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleCreatePageContainer)

export default ArticleCreatePage;
