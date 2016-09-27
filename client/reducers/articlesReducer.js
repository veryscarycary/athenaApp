const article = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE_REJECTED':
      return {
        ...state,
        status: 'error'
      }
    case 'CREATE_ARTICLE_FULFILLED':
      return {
        id: action.payload.id,
        issuePreview: action.issuePreview,
        title: action.payload.title,
        issue: action.payload.issue
        status: 'success'
      }
    case 'CREATE_ARTICLE_PENDING':
      return {
        ...state
        status: 'pending'
      }
    default:
      return state
  }
}

export const articlesList = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      return [
        ...state,
        article(undefined, action)
      ]
    case 'GET_ARTICLES':
      return state.concat(action.articles);
    default:
      return state
  }
}

export const toggleDisplay = (state = {hidden:true}, action) => {
  switch (action.type) {
    case 'TOGGLE_DISPLAY':
      return {
        ...state,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

export const articleDisplay = (state = {}, action) => {
  switch (action.type) {
    case 'ARTICLE_DISPLAY':
      return {
        title: action.payload.title,
        id: action.payload.id,
        solution: action.payload.solution,
        issue: action.payload.issue
      }
    default:
      return state
  }
}

