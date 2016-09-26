import { combineReducers } from 'redux';
import { articlesList } from './articlesReducer';
import { articleDisplay } from './articlesReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  ticketsReducer
})

export default rootReducer;
