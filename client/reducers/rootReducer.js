import { combineReducers } from 'redux';
import { articlesList } from './articlesReducer';
import { articleDisplay } from './articlesReducer';
import ticketsList from './ticketsReducer';

const rootReducer = combineReducers({
  articlesList,
  articleDisplay,
  ticketsList
})

export default rootReducer;
