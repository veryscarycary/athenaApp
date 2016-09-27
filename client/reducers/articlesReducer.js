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
        issuePreview: action.issuePreview,
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

export const articleDisplay = (state = {hidden:true}, action) => {
  switch (action.type) {
    case 'GET_ARTICLE_REJECTED':
      return {
        ...state,
        status: 'rejected'
      }
    case 'GET_ARTICLE_FULFILLED':
      return {
        title: action.payload.title,
        solution: action.payload.solution,
        issue: action.payload.issue,
        hidden: !state.hidden,
        status: 'fulfilled'
      }
    case 'GET_ARTICLE_PENDING':
      return {
        ...state,
        status: 'pending'
      }
    default:
      return state
  }
}

