import { combineReducers } from 'redux';
import {articlesList, articleDisplay, editModal, searchResults, status } from './articlesReducer';
import ticketsReducer, {ticketModal, ticketSearchResults} from './ticketsReducer';
import userReducer from './userReducer';
import { ticketPage, ticketArticlesSearch, ticketPageArticleModal } from './ticketPageReducer';
import auth from './sessionReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  editModal,
  searchResults,
  status,
  auth,
  ticketModal,
  ticketsReducer,
  ticketPage,
  ticketArticlesSearch,
  ticketSearchResults,
  ticketPageArticleModal
  userReducer
})

export default rootReducer;
