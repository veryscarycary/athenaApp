import { combineReducers } from 'redux';
import articlesList from './articlesReducer';

const rootReducer = combineReducers({
  articlesList,
})

export default rootReducer;
