import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const SearchResultsContainer = ({results, dispatch}) => (
  <ul className="search-results-list">
    {results.map(result => (
      <li
        className="search-results-item"
        key={result.id}>
        <a className="search-results-title">
        {result.title}
        </a>
      </li>
    ))}
  </ul>
)

const mapStateToProps = state => ({
  results: state.searchResults.results,
})

const SearchResults = connect(
  mapStateToProps,
)(SearchResultsContainer);

export default SearchResults;


