import React from 'react';
import TicketForm from './TicketForm';
import SearchTicketArticles from './ArticleSearch';
import ArticleModal from './ArticleModal';

const TicketDetailsPage = ({params}) => (
  <div className="ticket-page-container">
    <TicketForm id={params.id} />
    <SearchTicketArticles />
  </div>
);

export default TicketDetailsPage;
