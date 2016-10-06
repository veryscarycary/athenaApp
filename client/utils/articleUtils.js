import fetch from 'isomorphic-fetch';

const articleUtils = {
  getArticles: () => new Promise((resolve, reject) => {
    console.log('I WAS CALLED');
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
  getArticlesByIds: (idArray) => {
    return fetch('/api/kb/articles', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ids: idArray})
    })
      .then((response) => {
        return response.json().then(json => json);
      })
      .catch(err => console.log(err));
  },
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
            resolve(json);
        })
      .catch(err => {
        console.log(err);
        reject(err);
      });
    })
  }),
  editArticle: (article) => new Promise((resolve, reject) => {
    console.log(JSON.stringify(article))
    return fetch(`/api/kb/${article.id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(article)
    })
      .then((response) => {
        return response.json()
          .then(json => {
            console.log('this is the response: ',json);
            resolve(json)
          })
      })
      .catch(err => reject(err));
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
