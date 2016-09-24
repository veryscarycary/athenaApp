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

  switch(action.type) {
    case 'SET_NEW_TICKETS':
      return Object.assign({}, state, { tickets: action.tickets });

    case 'SET_NEW_SEARCHTEXT':
      return Object.assign({}, state, { searchText: action.searchText });

    case 'SET_FILTERED_TICKETS':
      return Object.assign({}, state, { filteredTickets: action.filteredTickets });

    case 'TOGGLE_CREATE_TICKET':
      return Object.assign({}, state, { createTicketToggled: action.createTicketToggled });

    default:
      return state
  }
};

export default ticketsReducer;
