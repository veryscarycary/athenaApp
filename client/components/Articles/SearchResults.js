import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticle, toggleArticle, clearSearch, setFlag } from '../../actions';

export const SearchResultsContainer = ({ clearSearch, getArticle, toggleArticle, results}) => {
  const handleToggle = (id) => {
    return Promise.resolve(toggleArticle())
    .then(() => getArticle(id))
  }
  const handleClearSearch = () => (
    clearSearch()
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
  results: state.searchResults.results,
})
const mapDispatchToProps = dispatch => bindActionCreators({
  toggleArticle,
  getArticle,
  clearSearch,
}, dispatch)

const SearchResults = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultsContainer);

export default SearchResults;
