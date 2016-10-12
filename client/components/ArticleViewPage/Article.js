import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { bindActionCreators } from 'redux';
import { getArticle, clearArticle } from '../../actions';

export class ArticleContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getArticle(this.props.id);
  }
  componentWillUnmount() {
    this.props.clearArticle();
  }

  render() {
    const {article, title, issue, issuePreview, solution} = this.props;
    return(
      <div>
        <h3 className="full-article-title main">{article.title}</h3>
        <h5 className="full-article-title">Summary</h5>
        <ReactMarkdown
          escapeHTML="true"
          source={article.issuePreview}
          className="content" />
        <h5 className="full-article-title">Issue</h5>
        <ReactMarkdown
          escapeHTML="true"
          source={article.issue}
          className="content" />
        <h5 className="full-article-title">Solution</h5>
        <ReactMarkdown
          escapeHTML="true"
          source={article.solution}
          className="content" />
      </div>
    )
  }
}

    //{auth && auth[0] === 'admin' ? <EditButton /> : null}
const mapStateToProps = (state) => ({
  article: state.articleDisplay,
})
const mapDispatchToProps = (dispatch) => bindActionCreators({
  getArticle,
  clearArticle
}, dispatch)

const Article = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleContainer);

export default Article;

