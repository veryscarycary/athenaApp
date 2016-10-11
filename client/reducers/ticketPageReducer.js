let emptyTicket = {
  title:'',
  issue:'',
  issuePreview:'',
  solution:'',
  relatedArticles:[],
  relatedProducts:[],
  customerId: '',
};

export const ticketPage = (state={ticket:{},}, action) => {
  switch (action.type) {
    case 'CREATE_TICKET_FULFILLED':
      return {
        ...state,
        ticket: action.payload.ticket
      }
    case 'EDIT_TICKET_FIELD':
      return {
        ...state,
        article: {
          ...state.article,
          [action.payload.field]: action.payload.value,
        }
      }
    case 'SUBMIT_TICKET_EDIT_FULFILLED':
      return {
        ...state,
      }
    case 'GET_TICKET_FOR_MODAL_FULFILLED':
      return {
        ...state,
        ticket: action.payload[0],
      }
    case 'CLEAR_TICKET_FOR_MODAL':
      return {
        ...state,
        ticket:{}
      }
    default:
      return state
  }
}
