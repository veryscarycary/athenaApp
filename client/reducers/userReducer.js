const initialState = {
  userInfo: {
    firstName: '',
    lastName: '',
    username: '',
    roles: [],
    email: '',
    phoneNumber: '',
    bio: '',
    dateSignedUp: '',
    dateLastLogin: '',
    dateProfileLastUpdated: ''
  }
};


const userReducer = function(state = initialState, action) {
  switch(action.type) {

    case 'SET_USER_INFO':
      return Object.assign({}, state, { userInfo: action.userInfo });

    default:
      return state
  }
};

export default userReducer;
