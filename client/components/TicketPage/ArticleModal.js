import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FullArticleContainer } from '../Articles/FullArticle';
import { closeTicketArticleModal } from '../../actions';


const mapStateToProps = state => ({
  article: state.ticketPageArticleModal.article,
  auth: state.userReducer.currentUser.roles,
  ticketPage: true,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleArticle: closeTicketArticleModal,
},dispatch);

const ArticleModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullArticleContainer)

export default ArticleModal;
