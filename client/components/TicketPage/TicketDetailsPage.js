import React, { Component } from 'react';
import TicketForm from './TicketForm';

//import ArticleSearchResults from './ArticleSearchResults';
//import ArticleModal from './ArticleModal';

export default class TicketDetailsPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <TicketForm id={this.props.params.id} />
    )
  }
}
