export const status = (state = {loading: false, error: null}, action) => {
  switch (action.type) {
    case `${action.type}_PENDING`:
      return {
        ...state,
        loading:true,
      }
    case `${action.type}_REJECTED`:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}
export const article = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE_FULFILLED':
      return {
        id: action.payload.id,
        issuePreview: action.payload.issuePreview,
        title: action.payload.title,
        issue: action.payload.issue,
        solution: action.payload.solution,
        status: 'fulfilled'
      }
    default:
      return state
  }
}

export const articlesList = (state = {articles:[], past:[]}, action) => {
  switch (action.type) {
    case 'DELETE_ARTICLE_FULFILLED':
      return {
        ...state,
        articles: [
          ...state.slice(0, action.payload-1),
          ...state.slice(action.payload)
        ]
      }
    case 'SEARCH_ARTICLES_FULFILLED':
      return {
        ...state,
        articles: action.payload,
      }
//    case 'CLEAR_SEARCH':
//      let present = state.past[state.past.length - 1];
//      let newPast = state.past.slice(0, state.past.length - 1);
//      return {
//        ...state,
//        articles: present,
//        past: newPast,
//      }
    case 'CREATE_ARTICLE_FULFILLED':
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      }
    case 'GET_ARTICLES_FULFILLED':
      return {
        ...state,
        articles:action.payload
      }
//    case 'SUBMIT_EDIT_FULFILLED':
//      console.log(state.articles);
//      return {
//        ...state,
//        articles: state.articles.map((item) => {
//          if (item.id === action.payload.id) {
//            return action.payload;
//          }
//          return item;
//        })
//      }
    default:
      return state
  }
}

export const articleDisplay = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_ARTICLE':
      return {}
    case 'SUBMIT_EDIT_FULFILLED':
      return {
        ...state,
        issue: action.payload.issue,
        solution: action.payload.solution,
        title: action.payload.title,
        issuePreview: action.payload.issuePreview,
      }
    case 'GET_ARTICLE_FULFILLED':
      return {
        title: action.payload[0].title,
        solution: action.payload[0].solution,
        issue: action.payload[0].issue,
        _id: action.payload[0]._id,
        issuePreview: action.payload[0].issuePreview,
        id: action.payload[0].id,
      }
    default:
      return state
  }
}

export const editModal = (state = {article:{}}, action) => {
  switch (action.type) {
    case 'DELETE_ARTICLE_FULFILLED':
      return {
        ...state,
        article:{},
      }
    case 'SET_EDIT_ARTICLE_FULFILLED':
      return {
        ...state,
        article: action.payload[0]
      };
    case 'EDIT_FIELD':
      return {
        ...state,
        article: {
          ...state.article,
         [action.payload.field]: action.payload.value,
       }
    }
    case 'SUBMIT_EDIT_FULFILLED':
      return {
        ...state,
        article: action.payload,
      }
    default: return state
  }
}

export const searchResults = (state = {results:[]}, action) => {
  switch (action.type) {
    case 'SEARCH_ARTICLES_FULFILLED':
      return {
        ...state,
        results: action.payload,
      }
    case 'CLEAR_SEARCH':
      return {
        ...state,
        results: [],
      }
    default:
      return state
  }
}
