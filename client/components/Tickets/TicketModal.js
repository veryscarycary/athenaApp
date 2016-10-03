import React from 'react';
import { connect } from 'react-redux';

import articleUtils from '../../utils/articleUtils'
import ticketUtils from '../../utils/ticketUtils';
import * as ticketActionCreators from '../../actions/index';
import EditTicketForm from './EditTicketForm';
import ArticleModal from './ArticleModal';


class TicketModal extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      modalArticles: []
    }
  }

  componentWillMount() {
    articleUtils.getArticlesByIds(this.props.ticket.relatedArticles).then((articles) => {
      this.setState({modalArticles: articles}, (articles) => articles);
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

  deleteTicket (ticketId) {
    ticketUtils.deleteTicket(ticketId);
  };

  render () {
    return (
      <td>
        <a href={`#openModal${this.props.ticket._id}`}>More Info</a>

        <div id={`openModal${this.props.ticket._id}`} className="modalDialog">
          <div>
            <a href="#closeModal" title="Close" className="closeModal">X</a>
            <h2>Ticket Details</h2>
            <p>
            {this.ticketModalInfo(this.props.ticket).map(ticketInfo => (
              <span id={`preview${ticketInfo[0]}`}>{ticketInfo.join(': ')}<br /></span>
            ))
            }
            relatedArticles:
            {this.state.modalArticles.map(article => (<button data-toggle='collapse' data-target={`#articleModal${article.id}`}>{article.title}</button>))}
            </p>
            <button className='btn btn-default' data-toggle='collapse' data-target={`#editTicket${this.props.ticket._id}`}>Edit Ticket</button>

            <form action='/tickets' method=''>
              <button type='submit' className='btn btn-default' onClick={() => {this.deleteTicket(this.props.ticket._id)}} name='delete'>Delete Ticket</button>
            </form>

            <div className='collapse' id={`editTicket${this.props.ticket._id}`}>
              <EditTicketForm ticket={this.props.ticket} className='collapse' />
            </div>

            {this.state.modalArticles.map(article => (
              <div className='collapse' id={`articleModal${article.id}`}>
                <ArticleModal article={article} className='collapse' />
              </div>
            ))}
          </div>
        </div>
      </td>
    );
  }

}

export default TicketModal;
