import { combineReducers } from 'redux';
import { articleDisplay, editModal, articlesList } from './articlesReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  ticketsReducer,
  editModal
})

export default rootReducer;
