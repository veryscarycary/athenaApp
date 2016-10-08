import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchArticles, clearSearch } from '../../actions';
import SearchResults from './SearchResults.js';

export const SearchArticlesContainer = ({ clearSearch,searchArticles, results }) => {
  const handleSearch = (options) => {
    searchArticles(options)
  }
  const handleClearSearch = (e) => {
    clearSearch()
  }
  let search;
  return (
    <div
      tabIndex="0"
      className="search-articles"
      onBlur={(e) => {
          search.value = '';
          handleClearSearch(e);
        }}>
      <input
        ref={node => {
          search = node;
        }}
        className='edit-modal-input'
        type="text"
        placeholder="search"
        onChange={e => {
          e.preventDefault();
          if (!search.value.trim()) {
            return
          }
          var options = {term: search}
          handleSearch({term: search.value})
        }} />
        { results ? <SearchResults /> : null}
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  searchArticles,
  clearSearch,
}, dispatch);

const mapStateToProps = state => ({
  results: state.searchResults,
});

const SearchArticles = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchArticlesContainer);

export default SearchArticles;
