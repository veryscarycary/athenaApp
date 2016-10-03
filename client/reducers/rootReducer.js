import { combineReducers } from 'redux';
import { articlesList } from './articlesReducer';
import { articleDisplay } from './articlesReducer';
import ticketsReducer from './ticketsReducer';
import sessionReducer from './sessionReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  ticketsReducer,
  sessionReducer
})

export default rootReducer;
