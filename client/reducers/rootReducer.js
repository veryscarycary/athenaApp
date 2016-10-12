import { combineReducers } from 'redux';
import {articlesList, articleDisplay, editModal, searchResults, create, status } from './articlesReducer';
import ticketsReducer, {ticketModal} from './ticketsReducer';
import userReducer from './userReducer';
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
  ticketModal,
  ticketsReducer,
  ticketPage,
  ticketArticlesSearch,
  ticketPageArticleModal,
  userReducer
})

export default rootReducer;
