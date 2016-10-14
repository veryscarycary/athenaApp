import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTicketArticles, clearTicketArticlesSearch, useArticle, useTicket } from '../../actions';
import ArticleSearchResults from './ArticleSearchResults';
import ArticleModal from './ArticleModal';

export const SearchArticlesContainer = ({ ticket, clearTicketArticlesSearch, searchTicketArticles, results, article, useArticle, useTicket }) => {
  const handleSearch = (options) => {
    searchTicketArticles(options)
  }
  const handleClearSearch = (e) => {
    clearTicketArticlesSearch()
  }
  const handleUse = () => {
    useArticle(article, ticket.id);
    useTicket(article.id, ticket);
  }
  let search;
  return (
    <div className="search-sidebar">
      <input
          ref={node => {
            search = node;
          }}
          className='search-sidebar-searchbar'
          type="text"
          placeholder="search articles"
          onChange={e => {
            e.preventDefault();
            if (!search.value.trim()) {
              return handleClearSearch(e);
            }
            var options = {term: search}
            handleSearch({term: search.value, archived:false})
          }} />


      { article ?
        <div className="ticket-article-container">
          <button className='ticket-article-modal-use-button'
          onClick={handleUse}>
            use
          </button>
          <ArticleModal />
        </div> : null
      }
      <div
        tabIndex="0"
        className="search-articles"
        onBlur={(e) => {
            search.value = '';
            handleClearSearch(e);
          }}>
                  <ArticleSearchResults />
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  searchTicketArticles,
  clearTicketArticlesSearch,
  useArticle,
  useTicket
}, dispatch);

const mapStateToProps = state => ({
  article: state.ticketPageArticleModal.article,
  ticket: state.ticketPage.ticket,
});

const SearchTicketArticles = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchArticlesContainer);

export default SearchTicketArticles;
