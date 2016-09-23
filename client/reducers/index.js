import { combineReducers } from 'redux';

// Reducers
import reducer1 from './reducer1';
// import xyz reducer from file
// import xyz reducer from file
// etc

var reducers = combineReducers({
  reducer1: reducer1
  // reducer2: reducer2,
  // reducer3: reducer3
});

export default reducers;