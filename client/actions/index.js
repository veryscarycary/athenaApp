import uuid from 'uuid';
import articleUtils from '../utils/articleUtils';
import ticketUtils from '../utils/ticketUtils';
import sessionUtils from '../utils/sessionUtils';

export const createArticle = (article) => ({
    type: 'CREATE_ARTICLE',
    payload: articleUtils.postArticle(article)
});

export const searchArticles = (term) => ({
  type: 'SEARCH_ARTICLES',
  payload: articleUtils.searchArticles(term)
});

export const getArticles = () => ({
  type: 'GET_ARTICLES',
  payload: {
    promise: articleUtils.getArticles()
  }
});

export const getArticle = (id) => ({
  type: 'GET_ARTICLE',
  payload: {
    promise: articleUtils.getArticle(id)
  }
});

export const toggleArticle = () => ({
  type: 'TOGGLE_DISPLAY',
})

export const editArticle = (id) => ({
  type: 'EDIT_ARTICLE',
  payload: articleUtils.editArticle(id)
});

export const deleteArticle = (id) => ({
  type: 'DELETE_ARTICLE',
  payload: articleUtils.deleteArticle(id)
})

export const loadTicketState = () => ({
  type: 'SET_NEW_TICKETS',
  payload: ticketUtils.getTickets()
});

export const toggleEdit = (article = {}) => ({
  type: 'TOGGLE_EDIT_MODAL',
  payload: article
});

export const editField = (field, value) => ({
  type: 'EDIT_FIELD',
  payload: {
    field,
    value,
  }
});
export const toggleCreate = () => ({
  type: 'TOGGLE_CREATE',
})
export const submitEdit = (article) => ({
  type: 'SUBMIT_EDIT',
  payload: articleUtils.editArticle(article)
});

export const loadSearchState = (searchText) => ({
  type: 'SET_NEW_SEARCHTEXT',
  searchText
});

export const loadFilteredTicketState = (filteredTickets) => ({
  type: 'SET_FILTERED_TICKETS',
  filteredTickets
});

export const loadSessionId = (sessionId) => ({
  type: 'SET_SESSION_ID',
  sessionId
});
