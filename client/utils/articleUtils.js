import fetch from 'isomorphic-fetch';

const articleUtils = {
  getArticles: () => new Promise((resolve, reject) => {
    return fetch('/api/kb')
      .then(response => {
        return response
          .json()
          .then(json => {
            resolve(json)
          })
        })
        .catch(err => reject(err));
  }),
  getArticlesById: () => 
  getArticle: (id) => new Promise((resolve, reject) => {
    return fetch(`/api/kb/${id}`)
      .then((response) => {
        return response
          .json()
          .then(json => {
            resolve(json)
         })
        .catch(err => reject(err));
      })
  }),
  searchArticles: (term) => new Promise((resolve, reject) => {
    return fetch(`/api/kb/search=${term}`)
      .then((response) => {
        return response
          .json()
          .then(json => {
            resolve(json)
          })
      .catch(err => reject(err));
    })
  }),
  postArticle: (article) => new Promise((resolve, reject) => {
    return fetch('/api/kb', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(article)
    })
      .then((response) => {
        return response.json()
          .then(json => {
            resolve(json)
          })
        .catch(err => reject(err));
    })
  }),
  editArticle: (id, article) => new Promise((resolve, reject) => {
    return fetch(`/api/kb/${id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(article)
    })
      .then((response) => {
        return response.json()
          .then(json => {
            resolve(json)
          })
        .catch(err => reject(err));
      })
  }),
  deleteArticle: (id) => new Promise((resolve, reject) => {
    return fetch(`/api/kb/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json()
          .then(json => {
            resolve(json)
          })
      .catch(err => reject(err));
    })
  }),
}

export default articleUtils;
