import React, { PropTypes, Component } from 'react';
import { deleteArticle, submitEdit, editField, setEditArticle } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class EditArticleContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.setEditArticle(this.props.params.id);
  }
  handleDelete(id) {
    this.props.deleteArticle(id);
    this.props.history.push('/articles');
  }
  handleSubmit(edits) {
    this.props.submitEdit(edits)
      .then(() => this.props.history.push(`/articles/${this.props.params.id}`));
  }
  handleChange(e) {
    this.props.editField(e.target.name, e.target.value);
  }
  render() {
    const { article, submitEdit, editField, authorId } = this.props;
    let title, issuePreview, issue, solution;
    return (
      <div className="article-list-container">
      <div className="article-edit">
        <h3 className="title">Edit</h3>
        <h3 className="subtitle">Title:</h3>
        <input name="title"
          value={article.title}
          className="edit-modal-input"
          onChange={this.handleChange}
          ref={node => title=node} />

        <h5 className="subtitle">Summary:</h5>
        <textarea
          value={article.issuePreview}
          className="edit-modal-textarea"
          onChange={this.handleChange}
          ref={node => issuePreview=node}
        />

        <h5 className="subtitle">Issue:</h5>
        <textarea
          value={article.issue}
          className="edit-modal-textarea"
          onChange={this.handleChange}
          ref={node => issue=node}
        />

        <h5 className="subtitle">Solution:</h5>
        <textarea
          value={article.solution}
          className="edit-modal-textarea"
          onChange={this.handleChange}
          ref={node => solution=node}
        />
        <div className="button-right-float multiple-buttons">
        {auth[0] === 'userPlus' || auth[0] === 'admin' ?
        <button
          onClick={() => {
            var edits = article;
            edits.title = title.value;
            edits.archived = 'true';
            edits.status = 'archived';
            edits.issuePreview = title.issuePreview;
            edits.issue = title.issue;
            edits.solution = title.solution;
            this.handleSubmit(edits)
          }}
          className="grey-button">
            archive
        </button> : null }
        {auth[0] === 'userPlus' || auth[0] === 'admin' ?
        <button
          onClick={() => {
            this.handleDelete(article.id)
          }}
          className="grey-button">
            delete
        </button> : null}
        <button
          onClick={() => {
            var edits = article;
            edits.title = title.value;
            edits.issuePreview = title.issuePreview;
            edits.issue = title.issue;
            edits.solution = title.solution;
            this.handleSubmit(edits)
          }}
          className="article-list-button">
            submit
        </button>

      </div>
      </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  article: state.editModal.article,
  authorId: state.userReducer.currentUser._id,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  submitEdit,
  editField,
  deleteArticle,
  setEditArticle,
}, dispatch)

const EditArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticleContainer)

export default EditArticle;
