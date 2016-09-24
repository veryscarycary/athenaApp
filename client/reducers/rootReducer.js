import { combineReducers } from 'redux';
import articlesList from './articlesReducer';
import ticketsReducer from './ticketsReducer';

const rootReducer = combineReducers({
  articlesList,
  ticketsReducer
})

export default rootReducer;
