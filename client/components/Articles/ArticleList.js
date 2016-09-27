import React from 'react';
import { connect } from 'react-redux';
import { toggleArticleDisplay } from '../../actions';


const ArticleListItems = ({dispatch, articles}) => {
  const handleToggle = (article) => {
    console.log('pass me!', article);
    dispatch(toggleArticleDisplay(article));
  }
  return (
    <div className="article-list">
      <ul>
        {articles.reverse().map(article => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <div>{article.abstract}</div>
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

const mapStateToProps = (state) => {
  return {
    articles: state.articlesList
  }
}

const ArticleList = connect(
  mapStateToProps
)(ArticleListItems);

export default ArticleList;
