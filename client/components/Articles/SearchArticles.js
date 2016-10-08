import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchArticles } from '../../actions';
import SearchResults from './SearchResults.js';

export const SearchArticlesContainer = ({ dispatch, results }) => {
  const handleSearch = (options) => (
    searchArticles(options)
  )
  let search;
  return (
    <div className="search-articles">
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
}, dispatch);

const mapStateToProps = state => ({
  results: state.searchResults
});

const SearchArticles = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchArticlesContainer);

export default SearchArticles;
