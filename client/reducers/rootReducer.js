import { combineReducers } from 'redux';
import { articleDisplay, editModal, articlesList, create } from './articlesReducer';
import ticketsReducer from './ticketsReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  ticketsReducer,
  editModal,
  create,
  sessionReducer
})

export default rootReducer;
