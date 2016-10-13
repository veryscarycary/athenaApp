import React, { PropTypes, Component } from 'react';

import { submitEdit, editField, setEditArticle } from '../../actions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class EditArticleContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    this.props.setEditArticle(this.props.params.id);
  }
  handleSubmit(edits) {
    this.props.submitEdit(edits)
      .then(() => this.props.history.push(`/articles/${this.props.params.id}`));
  }
  handleChange(e) {
    this.props.editField(e.target.name, e.target.value);
  }
  render() {
    const { article, submitEdit, editField } = this.props;
    let title, issuePreview, issue, solution;
    return (
      <div>
        <h3>Edit</h3>
        <h3 className="full-article-title main">Title:</h3>
        <input name="title"
          value={article.title}
          className="edit-modal-input"
          onChange={this.handleChange}
          ref={node => title=node} />

        <h5 className="full-article-title">Summary:</h5>
        <textarea
          value={article.issuePreview}
          className="edit-modal-textarea"
          onChange={this.handleChange}
          ref={node => issuePreview=node}
        />

        <h5 className="full-article-title">Issue:</h5>
        <textarea
          value={article.issue}
          className="edit-modal-textarea"
          onChange={this.handleChange}
          ref={node => issue=node}
        />

        <h5 className="full-article-title">Solution:</h5>
        <textarea
          value={article.solution}
          className="edit-modal-textarea"
          onChange={this.handleChange}
          ref={node => solution=node}
        />
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
            edit
        </button>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  article: state.editModal.article,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  submitEdit,
  editField,
  setEditArticle,
}, dispatch)

const EditArticle = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditArticleContainer)

export default EditArticle;
