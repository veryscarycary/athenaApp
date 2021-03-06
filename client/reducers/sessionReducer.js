// NO LONGER NEED SESSIONREDUCER, SESSION WILL BE KEPT IN
// SESSIONSTORAGE ON WINDOW, keeping just in case
import Cookies from 'js-cookie';

const sessionReducer = function(state = {}, action) {
  switch(action.type) {

    case 'SET_SESSION_ID':
      return Object.assign({}, state, { sessionId: action.sessionId });

    default:
      return state
  }
};

var level = Cookies.get('roles')
                       ? JSON.parse(Cookies.get('roles'))
                       : 'guest'
const auth = function(state = {level: level}, action) {
  console.log(state);
  switch(action.type) {
    case 'GET_AUTH_LEVEL':
      return {
        level: action.payload
      }
    default:
      return state
  }
}

//export default sessionReducer;
export default auth;
