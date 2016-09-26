export const getArticles = () => {
  fetch('/api/kb')
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export const getArticle = (id) => {
  fetch(`/api/kb/${id}`)
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export const searchArticles = (term) => {
  fetch(`/api/kb/search=${term}`)
  .then((response) => response.json())
  .catch((err) => {
    console.erroe(err);
  });
}

export const postArticle = (article) => {
  fetch('/api/kb', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(article)
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err)
    });
}

export const editArticle = (id, article) => {
  fetch(`/api/kb/${id}`, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(article)
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export const deleteArticle = (id) => {
  fetch(`/api/kb/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}
