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
    let title, issue, solution;
    return (
      <div className={this.props.hidden ? "hidden full-article" : "full-article"}>
        <button
          onClick={e => {
            e.preventDefault();
            this.handleToggle({});
          }}>Close</button>
          <input
            ref={node => {
              title=node;
            }}
            onChange={this.handleChange}
            type="text"
            value={this.props.article.title}/>
            <h5>Issue</h5>
          <textarea
            ref={node => {
              issue=node;
            }}
            name="issue"
            onChange={this.handleChange}
            value={this.props.article.issue} />
          <h5>Solution</h5>
          <textarea
            ref={node => {
              solution = node;
            }}
            onChange={this.handleChange}
            value={this.props.article.solution} />
          <button
            onClick={e => {
              e.preventDefault();
              var article = this.props.article;
              article.issue = issue.value;
              article.solution = solution.value;
              article.title = title.value
              this.handleSubmit(article);
              this.handleToggle();
            }} >
              Submit changes</button>
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
