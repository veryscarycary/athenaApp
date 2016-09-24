const ticket = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_TICKET':
      return {
        id: action.id,
        body: action.body,
        title: action.title
      }
    default:
      return state
  }
}
const ticketList = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TICKET':
      return [
        ...state,
        ticket(undefined, action)
      ]
    case 'LOAD_TICKETS':
      return state.concat(action.tickets);
    default:
      return state
  }
}

export default ticketList;
