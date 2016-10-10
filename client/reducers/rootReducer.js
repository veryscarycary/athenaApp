import { combineReducers } from 'redux';
import {articlesList, articleDisplay, editModal, searchResults, create, status } from './articlesReducer';
import ticketsReducer from './ticketsReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  editModal,
  searchResults,
  create,
  status,
  ticketsReducer,
  sessionReducer
})

export default rootReducer;
