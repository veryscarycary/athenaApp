// NO LONGER NEED SESSIONREDUCER, SESSION WILL BE KEPT IN
// SESSIONSTORAGE ON WINDOW, keeping just in case

const sessionReducer = function(state = {}, action) {
  switch(action.type) {

    case 'SET_SESSION_ID':
      return Object.assign({}, state, { sessionId: action.sessionId });

    default:
      return state
  }
};

const auth = function(state = {level:null}, action) {
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
