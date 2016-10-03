const article = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE_REJECTED':
      return {
        ...state,
        status: 'rejected'
      }
    case 'CREATE_ARTICLE_FULFILLED':
      return {
        id: action.payload.id,
        issuePreview: action.payload.issuePreview,
        title: action.payload.title,
        issue: action.payload.issue,
        solution: action.payload.solution,
        status: 'fulfilled'
      }
    case 'CREATE_ARTICLE_PENDING':
      return {
        ...state,
        status: 'pending'
      }
    default:
      return state
  }
}

export const articlesList = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE_FULFILLED':
      return state.concat(action.payload);
    case 'GET_ARTICLES_REJECTED':
      return state;
    case 'GET_ARTICLES_FULFILLED':
      return state.concat(action.payload);
    case 'GET_ARTICLES_PENDING':
      return state;
    case 'SUBMIT_EDIT_FULFILLED':
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      })
    default:
      return state
  }
}

export const articleDisplay = (state = {hidden:true}, action) => {
  switch (action.type) {
    case 'GET_ARTICLE_REJECTED':
      return {
        ...state,
        status: 'rejected'
      }
    case 'SUBMIT_EDIT_FULFILLED':
      console.log('this is my state, ',state + '/n this is my payload: ' + action.payload)
      return {
        ...state,
        issue: action.payload.issue,
        solution: action.payload.solution,
        title: action.payload.title
      }
    case 'GET_ARTICLE_FULFILLED':
      return {
        title: action.payload[0].title,
        solution: action.payload[0].solution,
        issue: action.payload[0].issue,
        _id: action.payload[0]._id,
        id: action.payload[0].id,
        hidden: false,
        status: 'fulfilled'
      }
    case 'GET_ARTICLE_PENDING':
      return {
        ...state,
        status: 'pending'
      }
    case 'TOGGLE_DISPLAY':
      return Object.assign({}, {hidden: !state.hidden});
    default:
      return state
  }
}

export const editModal = (state = {hidden:true, article:{}}, action) => {
  switch (action.type) {
    case 'TOGGLE_EDIT_MODAL':
      return Object.assign({},
                           {hidden: !state.hidden,
                            article:action.payload});
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
    case 'SUBMIT_EDIT_PENDING':
      return {
        ...state
      }
    case 'SUBMIT_EDIT_REJECTED':
      return {
        ...state,
      }
    default: return state
  }
}

export const create = (state = {hidden: true}, action) => {
  switch (action.type) {
    case 'TOGGLE_CREATE':
      return {
        hidden: !state.hidden
      }
    default:
      return state
  }
}
