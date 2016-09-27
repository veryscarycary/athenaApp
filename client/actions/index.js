import uuid from 'uuid';
import articleUtils from '../utils/articleUtils';
import ticketUtils from '../utils/ticketUtils';

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
  payload: articleUtils.getArticles()
});

export const getArticle = (id) => ({
  type: 'GET_ARTICLE',
  payload: articleUtils.getArticle(id)
});

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

export const loadSearchState = (searchText) => ({
  type: 'SET_NEW_SEARCHTEXT',
  searchText
});

export const loadFilteredTicketState = (filteredTickets) => ({
  type: 'SET_FILTERED_TICKETS',
  filteredTickets
});
