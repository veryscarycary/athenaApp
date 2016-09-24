import articles from '../mock/articleStubs';

const article = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      return {
        id: action.id,
        abstract: action.abstract,
        title: action.title
      }
    default:
      return state
  }
}

const articlesList = (state = [], action) => {
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

export default articlesList;
