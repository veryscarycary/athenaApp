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
    <div className='article-list-container'>
    <div className='article-create'>
      <h3 className="title">Create new article</h3>
      <h3 className="subtitle">Title</h3>
      <input
        required
        placeholder="eg. How to troubleshoot a network connection"
        className="edit-modal-input"
        ref={node => title=node}
      />
      <h5 className="subtitle">Summary</h5>
      <input
        required
        placeholder="brief summary of the problem"
        ref={node => issuePreview=node}
        className="edit-modal-input" />
      <h5 className="subtitle">Issue</h5>
      <textarea
        required
        placeholder="detailed description of the problem"
        ref={node => issue=node}
        className="edit-modal-textarea" />
      <h5 className="subtitle">Solution</h5>
      <textarea
        required
        placeholder="describe how you solved the problem"
        ref={node => solution=node}
        className="edit-modal-textarea" />
      <h5 className="subtitle">Product</h5>
      <select name='product'
        ref={node=>product=node}>
        <option value={products[0]}>{products[0]}</option>
        <option value={products[1]}>{products[1]}</option>
        <option value={products[2]}>{products[2]}</option>
        <option value={products[3]}>{products[3]}</option>
      </select>
       <div className='button-right-float'>
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
       </div>
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
