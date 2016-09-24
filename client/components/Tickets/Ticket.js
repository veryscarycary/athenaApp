import React from 'react';
import { connect } from 'react-redux';

const Ticket = ({ticket}) => (
  <div>
    {ticket} Issue With Blue Screen, Customer#1432, Product: IBM Printer
  </div>
);

export default Ticket;
