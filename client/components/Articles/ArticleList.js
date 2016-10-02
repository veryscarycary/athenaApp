import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticle, toggleArticle } from '../../actions';


const ArticleListItems = ({articles, getArticle, toggleArticle}) => {
  const handleToggle = (article) => {
    return Promise.resolve(toggleArticle())
    .then(() => getArticle(article.id));
  }

  return (
    <div className="article-list">
      <ul>
        {articles.slice().reverse().map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <div>{article.issuePreview}</div>
            <button onClick={e => {
              e.preventDefault();
              handleToggle(article);
            }}>
              Read more
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  articles: state.articlesList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getArticle,
  toggleArticle,
}, dispatch);

const ArticleList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleListItems);

export default ArticleList;
