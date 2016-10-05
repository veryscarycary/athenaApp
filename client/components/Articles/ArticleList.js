import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticle, toggleArticle, toggleCreate} from '../../actions';


const ArticleListItems = ({articles, getArticle, toggleArticle, toggleCreate}) => {
  const handleToggle = (article) => {
    return Promise.resolve(toggleArticle())
    .then(() => getArticle(article.id));
  }
  const handleCreateToggle = () => {
    return toggleCreate();
  }

  return (
    <div>
      <div className="button-float">
        <button className="full-article-button"
        onClick={handleCreateToggle}>
          <i className="material-icons">edit</i>
        </button>
      </div>
      <div className="article-list">
      <ul>
        {articles.slice().reverse().map(article => (
          <li
            className="article-list-item"
            key={article.id}>
            <div
              className="article-list-content">
              <h3 className="article-list-title">{article.title}</h3>
              <div>{article.issuePreview}</div>
            </div>
            <button
              className="article-list-button"
              onClick={e => {
              e.preventDefault();
              handleToggle(article);
            }}>
            Read more

            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  articles: state.articlesList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticle,
  toggleArticle,
  toggleCreate,
}, dispatch);

const ArticleList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleListItems);

export default ArticleList;
