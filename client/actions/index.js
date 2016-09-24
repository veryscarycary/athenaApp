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

export const loadTicketState = (tickets) => ({
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
