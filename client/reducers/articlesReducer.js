const article = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      return {
        id: action.id,
        abstract: action.abstract,
        title: action.title,
        body: action.body
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
    case 'LOAD_ARTICLES':
      return state.concat(action.articles);
    default:
      return state
  }
}

export const articleDisplay = (state = {hidden: true}, action) => {
  switch (action.type) {
    case 'TOGGLE_ARTICLE_DISPLAY':
      console.log('called!');
      return {
        title: action.title,
        id: action.id,
        body: action.body,
        hidden: !state.hidden
      }
    default:
      return state
  }
}

