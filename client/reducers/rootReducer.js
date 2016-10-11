import { combineReducers } from 'redux';
import {articlesList, articleDisplay, editModal, searchResults, create, status } from './articlesReducer';
import ticketsReducer from './ticketsReducer';
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
})

export default rootReducer;
