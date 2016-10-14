import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticle, toggleArticle, toggleCreate} from '../../actions';
import { Button } from './ButtonContainer';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';
import SearchArticles from './SearchArticles';

export const ArticleListItems = ({auth, articles, article, getArticle, toggleArticle}) => {
  const handleToggle = (article) => {
    return Promise.resolve(toggleArticle())
    .then(() => getArticle(article.id));
  }
  const handleCreateToggle = () => {
    return toggleCreate();
  }

  return (
    <div className="article-list-container">
    { auth[0] === 'guest'
      ? null
      : <div className="button-float">
        <Link to="/articles/create">
          <button className="article-create-button">
            <i className="material-icons">add</i>
          </button>
        </Link>
      </div>
    }
      <div className="article-list">
      <SearchArticles />
      <ul>
        {articles.slice().map(article => (
          <li
            className="article-list-item"
            key={article.id}>
            <div
              className="article-list-content">
              <h3 className="article-list-title">{article.title}</h3>
              <div className="article-list-preview">
                {article.issuePreview}
                </div>
            </div>
            <div className="article-list-item-button">
              <Link to={`/articles/${article.id}`}>
                <button
                  className="read-more">
                  Read more
                </button>
            </Link>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}

let article = {
  mapStateToProps: (state) => ({
    articles: state.articlesList.articles,
    auth: state.userReducer.currentUser.roles,
    article: state.articleDisplay,
  }),

  mapDispatchToProps: dispatch => bindActionCreators({
    getArticle,
    toggleArticle,
  }, dispatch)
}

const ArticleList = connect(
  article.mapStateToProps,
  article.mapDispatchToProps,
)(ArticleListItems);

let button = {
  mapStateToProps: (state) => ({
    cssClass: 'full-article-button',
    icon:'create',
  }),
  mapDispatchToProps: (dispatch, ownProps) => ({
    clickEvent: () => {
      dispatch(toggleCreate());
    }
  })
}

const CreateButton = connect(
  button.mapStateToProps,
  button.mapDispatchToProps
)(Button);

export default ArticleList;
