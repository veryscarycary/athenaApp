import uuid from 'uuid';

export const createArticle = ({ abstract, title, body }) => ({
    type: 'CREATE_ARTICLE',
    id: uuid.v4(),
    abstract,
    title,
    body
});

export const loadArticles = (articles) => ({
  type: 'LOAD_ARTICLES',
  articles
});

export const searchArticles = (term) => ({
  type: 'SEARCH_ARTICLES',
  term
});

// example action creator that returns an action for the dispatcher
export const loadTicketState = (tickets) => ({
    // here is the type being imported in
    type: 'LOAD_TICKETS',
    // ES6 for users: users
    tickets
});

export const toggleArticleDisplay = ({title, id, body}) => ({
  type: 'TOGGLE_ARTICLE_DISPLAY',
  title,
  id,
  body
});
