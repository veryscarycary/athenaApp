import { connect } from 'react-redux';
import TicketList from '../TicketList';

const mapStateToProps = (state) => {
  debugger;
  return {
    tickets: state.ticketsList
  }
}

const TicketListItems = connect(
  mapStateToProps
)(TicketList);

export default TicketListItems;
