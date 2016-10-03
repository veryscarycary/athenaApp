import { combineReducers } from 'redux';
import { articleDisplay, editModal, articlesList, create } from './articlesReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  ticketsReducer,
  editModal,
  create
})

export default rootReducer;
