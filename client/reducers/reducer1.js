import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  tickets: []
};

// in my mind, this is kind of like middleware, where
// the suggested stateChange is passed through the combinedReducers,
// added/updated to the previous state, and then added to
//  a completely new, 'reduced' state

const reducer1 = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_NEW_TICKETS:
      return Object.assign({}, state, { tickets: action.tickets });
  }

  return state;
};

export default reducer1;