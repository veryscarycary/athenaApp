import { connect } from 'react-redux';
import TicketDisplay from '../TicketDisplay';
import { loadTicketState } from '../../../actions/index.js';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ loadTicketState }, dispatch)
}

const Tickets = connect(() => ({}),
  mapDispatchToProps
)(TicketDisplay);

export default Tickets;

