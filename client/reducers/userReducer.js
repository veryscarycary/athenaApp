const initialState = {
  currentUser: {
    firstName: '',
    lastName: '',
    username: '',
    roles: [],
    email: '',
    phoneNumber: '',
    bio: '',
    pictureUrl: '',
    dateSignedUp: '',
    dateLastLogin: '',
    dateProfileLastUpdated: ''
  }
};


const userReducer = function(state = initialState, action) {
  switch(action.type) {

    case 'SET_CURRENT_USER_REJECTED':
      console.log('rejected')
      return {
        ...state,
        status: 'rejected'
      };
    case 'SET_CURRENT_USER_FULFILLED':
      return {
        currentUser: action.payload[0],
        status: 'fulfilled'
      };
    case 'SET_CURRENT_USER_PENDING':
      console.log('pending')
      return {
        ...state,
        status: 'pending'
      };

    default:
      return state
  }
};

export default userReducer;
