import uuid from 'uuid';
import fetch from '../utils'

export const createArticle = (article) => ({
    type: 'CREATE_ARTICLE',
    payload: fetch.postArticle(article)
});

export const searchArticles = (term) => ({
  type: 'SEARCH_ARTICLES',
  payload: fetch.searchArticles(term)
});

export const getArticles = () => ({
  type: 'GET_ARTICLES',
  payload: fetch.getArticles(),
});

export const getArticle = (id) => (
  return dispatch => {
    dispatch({
      type: 'GET_ARTICLE',
      payload: fetch.getArticle(id)
    }).then((result) => dispatch(articleDisplay(result)));
  };
)

export const editArticle = (id) => ({
  type: 'EDIT_ARTICLE',
  payload: fetch.editArticle(id)
});

export const deleteArticle = (id) => ({
  type: 'DELETE_ARTICLE',
  payload: fetch.deleteArticle(id)
})

export const toggleDisplay = () => ({
  type: 'TOGGLE_DISPLAY',
})

export const articleDisplay = ({title, id, issue, solution}) => ({
  type: 'ARTICLE_DISPLAY',
  title,
  id,
  body
});

export const loadTicketState = (tickets) => ({
  type: 'SET_NEW_TICKETS',
  tickets
})

export const loadSearchState = (searchText) => ({
  type: 'SET_NEW_SEARCHTEXT',
  searchText
})

export const loadFilteredTicketState = (filteredTickets) => ({
  type: 'SET_FILTERED_TICKETS',
  filteredTickets
})

export const loadCreateTicketState = (createTicketToggled) => ({
  type: 'TOGGLE_CREATE_TICKET',
  createTicketToggled
})
