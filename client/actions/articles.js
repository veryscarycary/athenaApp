import fetch from 'isomorphic-fetch';

export const GET_ARTICLES = 'GET_ARTICLES';
function getArticles(articles) {
  return {
    type: GET_ARTICLES,
    articles
  }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
function receiveArticles(articles) {
  return {
    type: RECEIVE_ARTICLES,
    articles: json.data.children.map(child => child.article);
  }
}

export function fetchArticles(articles) {
  return dispatch => {
    dispatch(requestPosts(subreddit))
    return fetch('/articles/endpoint')
      .then(response => response.json())
      .then(json => dispatch(receiveArticles(articles, json)))
      .catch(err => throw err);
  }
}

export const SUBMIT_ARTICLE = 'SUBMIT_ARTICLE';
function submitArticle(article) {
  return {
    type: SUBMIT_ARTICLE,
    article
  }
}

export function postArticle(article) {
  return dispatch => {
    dispatch(submitArticle(article))
    return fetch('/articles/endpoint', {method: 'POST', body: JSON.stringify(article)})
      .then(response => response.json())
      .then(json => dispatch(receiveArticles(articles, json)))
      .catch(err => throw err);
  }
}
