import uuid from 'uuid';
import fetch from '../utils'

export const createArticle = (article) => ({
    type: 'CREATE_ARTICLE',
    payload: {
      promise: fetch.postArticle(article)
    }
});

export const requestArticlesByTerm = (term) => ({
  type: 'REQUEST_ARTICLES_BY_TERM',
  payload: {
    promise: fetch.searchArticles(term)
  }
});

export const requestAllArticles = () => ({
  type: 'REQUEST_ALL_ARTICLES',
  payload: {
    promise: fetch.getArticles(),
  }
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
