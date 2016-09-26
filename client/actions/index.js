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

export const toggleArticleDisplay = ({title, id, body}) => ({
  type: 'TOGGLE_ARTICLE_DISPLAY',
  title,
  id,
  body
});

export const loadTicketState = (tickets) => ({
    // here is the type being imported in
//    type: 'LOAD_TICKETS',
    // ES6 for users: users
//    tickets

  type: 'SET_NEW_TICKETS',
  tickets
})

export const loadSearchState = (searchText) => ({
  type: 'SET_NEW_SEARCHTEXT',
  searchText
})

export const loadFilteredTicketState = (filteredTickets) => ({
  type: 'SET_FILTERED_TICKETS',
  filteredTickets
})

export const loadCreateTicketState = (createTicketToggled) => ({
  type: 'TOGGLE_CREATE_TICKET',
  createTicketToggled
})
