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
};

export const ticketArticlesSearch = (state={results:[]}, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_FULFILLED':
      return {
        ...state,
        results:action.payload
      }
    case 'SEARCH_TICKET_ARTICLES_FULFILLED':
      return {
        ...state,
        results: action.payload,
      }
    case 'CLEAR_TICKET_ARTICLES_SEARCH':
      return {
        ...state,
        results:[],
      }
    default:
      return state
  }
}

export const ticketPageArticleModal = (state={article:false}, action) => {
  switch (action.type) {
    case 'GET_ARTICLE_FOR_TICKET_SEARCH_FULFILLED':
      console.log('GET ARTICLE PAYLOAD === ',action.payload);
      return {
        ...state,
        article: action.payload[0]
      }
    case 'USE_ARTICLE':
      return {
        ...state,
        article:false
      }

    case 'CLOSE_TICKET_ARTICLE_MODAL':
      return {
        ...state,
        article:false
      }
    default:
      return state
  }
}
