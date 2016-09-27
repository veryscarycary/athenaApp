import fetch from 'isomorphic-fetch';

const articleUtils = {
  getArticles: () => {
    fetch('/api/kb')
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
  },
  getArticle: (id) => {
    fetch(`/api/kb/${id}`)
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
  },
  searchArticles: (term) => {
    fetch(`/api/kb/search=${term}`)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
  },
  postArticle: (article) => {
    fetch('/api/kb', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(article)
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err)
      });
  },
  editArticle: (id, article) => {
    fetch(`/api/kb/${id}`, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(article)
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
  },
  deleteArticle: (id) => {
    fetch(`/api/kb/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .catch((err) => {
        console.error(err);
      });
  },
}

export default articleUtils;
