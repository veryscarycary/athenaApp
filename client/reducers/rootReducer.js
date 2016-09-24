import { combineReducers } from 'redux';
import articlesList from './articlesReducer';
import ticketsList from './ticketsReducer';

const rootReducer = combineReducers({
  articlesList,
  ticketsList
})

export default rootReducer;
