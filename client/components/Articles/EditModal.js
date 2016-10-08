import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleEdit, submitEdit, editField } from '../../actions';

class EditModalContainer extends Component {
  constructor(props) {
    super(props)
  }
  handleToggle = () => {
    this.props.toggleEdit();
  }
  handleChange = e => {
    this.props.editField(e.target.name, e.target.value);
  }
  handleSubmit = (article) => {
    this.props.submitEdit(article);
  }
  render() {
    let title, issue, solution, preview;
    return (
      <div className={this.props.hidden ? "hidden full-article edit-modal" : "full-article edit-modal"}>
      <div className="edit-modal-container">
        <div className="button-float">
          <button
            className="full-article-button"
            onClick={e => {
              e.preventDefault();
              this.handleToggle({});
            }}><i className="material-icons">close</i></button>
          </div>
          <h5
            className="full-article-title"
            >Title:</h5>
          <input
            name="title"
            className="edit-modal-input"
            ref={node => {
              title=node;
            }}
            onChange={this.handleChange}
            type="text"
            value={this.props.article.title}/>
            <h5
              className="full-article-title"
              >Preview:</h5>
            <textarea
              className="edit-modal-textarea"
              ref={node => {
                preview=node;
              }}
              name="issuePreview"
              onChange={this.handleChange}
              value={this.props.article.issuePreview} />
            <h5
              className="full-article-title"
            >Issue:</h5>
          <textarea
            className="edit-modal-textarea"
            ref={node => {
              issue=node;
            }}
            name="issue"
            onChange={this.handleChange}
            value={this.props.article.issue} />
          <h5
            className="full-article-title"
            >Solution:</h5>
          <textarea
            className="edit-modal-textarea"
            ref={node => {
              solution = node;
            }}
            name="solution"
            onChange={this.handleChange}
            value={this.props.article.solution} />
          <button
            className="article-list-button"
            onClick={e => {
              e.preventDefault();
              var article = this.props.article;
              article.issue = issue.value;
              article.solution = solution.value;
              article.title = title.value;
              article.status = "active";
              this.handleSubmit(article);
              this.handleToggle();
            }} >
              Submit</button>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    article: state.editModal.article,
    hidden: state.editModal.hidden
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleEdit,
  submitEdit,
  editField
}, dispatch);

const EditModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModalContainer);

export default EditModal;
