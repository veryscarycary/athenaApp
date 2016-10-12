const initialState = {
  userInfo: {
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

    case 'SET_USER_INFO_REJECTED':
      console.log('rejected')
      return {
        ...state,
        status: 'rejected'
      };
    case 'SET_USER_INFO_FULFILLED':
      return {
        userInfo: action.payload[0],
        status: 'fulfilled'
      };
    case 'SET_USER_INFO_PENDING':
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
