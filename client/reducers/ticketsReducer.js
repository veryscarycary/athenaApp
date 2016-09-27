const initialState = {
  tickets: [],
  filteredTickets: [],
  searchText: '',
  createTicketToggled: false
};

// const ticket = (state = {}, action) => {
//   switch (action.type) {
//     case 'CREATE_TICKET':
//       return {
//         id: action.id,
//         body: action.body,
//         title: action.title
//       }
//     default:
//       return state
//   }
// }
// const ticketList = (state = [], action) => {
//   switch (action.type) {
//     case 'CREATE_TICKET':
//       return [
//         ...state,
//         ticket(undefined, action)
//       ]
//     case 'LOAD_TICKETS':
//       return state.concat(action.tickets);
//     default:
//       return state
//   }
// }

const ticketsReducer = function(state = initialState, action) {
  console.log(action,'this action is coming in')
  switch(action.type) {
    case 'SET_FILTERED_TICKETS_REJECTED':
      console.log('rejected')
      return {
        ...state,
        status: 'rejected'
      };
    case 'SET_FILTERED_TICKETS_FULFILLED':
      console.log(action.payload, 'FULFILLED');
      return {
        filteredTickets: action.payload,
        status: 'fulfilled'
      };
    case 'SET_FILTERED_TICKETS_PENDING':
      console.log('pending')
      return {
        ...state,
        status: 'pending'
      };

    case 'SET_NEW_TICKETS':
      console.log(action.tickets, 'the tickets made it to the reducer');
      return Object.assign({}, state, { tickets: action.tickets });

    case 'SET_NEW_SEARCHTEXT':
      return Object.assign({}, state, { searchText: action.searchText });

    case 'SET_FILTERED_TICKETS':
    console.log('in set filtered tickets', action, 'tickets')
      return Object.assign({}, state, { filteredTickets: action.filteredTickets });

    case 'TOGGLE_CREATE_TICKET':
      return Object.assign({}, state, { createTicketToggled: action.createTicketToggled });

    default:
      return state
  }
};

export default ticketsReducer;
