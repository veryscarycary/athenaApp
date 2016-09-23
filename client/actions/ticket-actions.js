import * as types from '../actions/action-types';


// example action creator that returns an action for the dispatcher
export function loadTicketState(tickets) {
  return {
    // here is the type being imported in
    type: types.GET_NEW_TICKETS,
    // ES6 for users: users
    tickets
  };
}