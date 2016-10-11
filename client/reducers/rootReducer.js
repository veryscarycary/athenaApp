import { combineReducers } from 'redux';
import {articlesList, articleDisplay, editModal, searchResults, create, status } from './articlesReducer';
import ticketsReducer from './ticketsReducer';
import { ticketPage, ticketArticlesSearch, ticketPageArticleModal } from './ticketPageReducer';
import auth from './sessionReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  editModal,
  searchResults,
  create,
  status,
  auth,
  ticketsReducer,
  ticketPage,
  ticketArticlesSearch,
  ticketPageArticleModal
})

export default rootReducer;
