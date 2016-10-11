import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticleForTicketSearch, clearTicketArticlesSearch } from '../../actions';

export const SearchResultsContainer = ({ clearTicketArticlesSearch, getArticleForTicketSearch, results}) => {
  const handleToggle = (id) => {
    getArticleForTicketSearch(id)
  }
  const handleClearSearch = () => (
    clearTicketArticlesSearch()
  )
  return (
    <ul className="search-results-list">
      {results.map(result => (
        <li
          onMouseDown={() => {
            handleToggle(result.id)
            handleClearSearch()
          }}
          className="search-results-item"
          key={result.id}>
          <a
           className="search-results-title">
          {result.title}
          </a>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({
  results: state.ticketArticlesSearch.results,
})
const mapDispatchToProps = dispatch => bindActionCreators({
  getArticleForTicketSearch,
  clearTicketArticlesSearch,
}, dispatch)

const ArticleSearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);

export default ArticleSearchResults;
