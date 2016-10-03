
const sessionReducer = function(state = {}, action) {
  switch(action.type) {

    // case 'SET_SESSION_STATE_REJECTED':
    //   console.log('rejected')
    //   return {
    //     ...state,
    //     status: 'rejected'
    //   };
    // case 'SET_SESSION_STATE_FULFILLED':
    //   console.log(action.payload, 'FULFILLED');
    //   return {
    //     validSession: action.payload
    //   };
    // case 'SET_SESSION_STATE_PENDING':
    //   console.log('pending')
    //   return {
    //     ...state,
    //     status: 'pending'
    //   };

    case 'SET_SESSION_ID':
      return Object.assign({}, state, { sessionId: action.sessionId });

    default:
      return state
  }
};

export default sessionReducer;
