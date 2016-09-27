import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchArticles } from '../../actions';

let SearchArticles = ({ dispatch }) => {
  let search;
  return (
    <div className="search-articles">
      <input
        ref={node => {
          search = node;
        }}
        type="text"
        placeholder="search"
        onChange={e => {
          e.preventDefault();
          if (!search.value.trim()) {
            return
          }
          dispatch(searchArticles(search.value))
        }} />
    </div>
  )
}

SearchArticles = connect()(SearchArticles);
export default SearchArticles;
