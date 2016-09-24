import uuid from 'uuid';

export const createArticle = ({ abstract, text }) => ({
    type: 'CREATE_ARTICLE',
    id: uuid.v4(),
    abstract,
    text
})

export const loadArticles = (articles) => ({
  type: 'LOAD_ARTICLES',
  articles
})

// example action creator that returns an action for the dispatcher
export const loadTicketState = (tickets) => ({
    // here is the type being imported in
    type: 'LOAD_TICKETS',
    // ES6 for users: users
    tickets
});
