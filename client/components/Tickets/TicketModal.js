import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import articleUtils from '../../utils/articleUtils'
import ticketUtils from '../../utils/ticketUtils';
import * as ticketActionCreators from '../../actions/index';
import EditTicketForm from './EditTicketForm';
import ArticleModal from './ArticleModal';
import { toggleTicketModal, setModalArticles } from '../../actions';
import { bindActionCreators } from 'redux';

class TicketModalContainer extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this);
  }

  componentWillMount() {
    articleUtils.getArticlesByIds(this.props.ticket.relatedArticles).then((articles) => {
      this.props.setModalArticles(articles)
//      this.setState({modalArticles: articles}, (articles) => articles);
    });
  }

  // getRelatedArticles(IdArray) {
  //   return articleUtils.getArticlesById(IdArray).then((articleObjects) =>
  //     articleObjects.map((article) => (<span>article.title</span>)));
  // }

  ticketModalInfo (ticket) {
    var ticketInfo = [];

    for (var key in ticket) {
      if (key === 'relatedArticles') {
        continue;
      } else {
        ticketInfo.push([key, ticket[key]]);
      }
    }

    return ticketInfo;
  };
  handleToggle () {
    this.props.toggleTicketModal();
  };

  deleteTicket (ticketId) {
    ticketUtils.deleteTicket(ticketId);
  };

  render () {
    return (
      <div id={`openModal${this.props.ticket._id}`} className="ticketModalDialog">
        <div>
          <button onClick={this.handleToggle.bind(this)} title="Close" className="closeModal">
            <i className="material-icons">
              exit
            </i>
          </button>
          <h2 className="title">Ticket Details</h2>
          <p>
            {this.ticketModalInfo(this.props.ticket).map(ticketInfo => (
              <span id={`preview${ticketInfo[0]}`}>
                <h3 className="subtitle">
                  {`${ticketInfo[0][0].toUpperCase() + ticketInfo[0].slice(1)}`}</h3>
                <h3 className="text">{`${ticketInfo[1]}`}</h3>
              </span>
            ))
            }
            <h3 className="subtitle">RelatedArticles</h3>
            {this.props.articles.map(article => (<div className="relatedArticles">
                                                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                                                 </div>))}
          </p>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleTicketModal,
  setModalArticles
},dispatch)

const mapStateToProps = state => ({
  articles: state.ticketModal.articles,
})

const TicketModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketModalContainer);

export default TicketModal;
