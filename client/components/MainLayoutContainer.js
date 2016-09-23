import React from 'react';
import { connect } from 'react-redux';
import store from '../store';

import TicketDisplay from './TicketDisplay';

class MainLayoutContainer extends React.Component {
  constructor (props) {
    super(props)


  }

  render () {
    return (
      <div>
        <TicketDisplay />
      </div>
    )
  }
};

const mapStateToProps = function(store) {
  console.log('this is the store!!!', store);
  return {
    tickets: store.reducer1.tickets
  };
};

export default connect(mapStateToProps)(MainLayoutContainer);