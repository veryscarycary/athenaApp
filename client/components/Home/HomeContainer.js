import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actions/index';

class HomeContainer extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (
      <div className='centerFlex'>
        <h1>Athena</h1>
        <h2>Smart Support Platform</h2>
        <h4>Hi, {this.props.userInfo.username}! Ready to solve some issues?</h4>
      </div>
    );
  }
};

const mapStateToProps = function(store) {
  console.log(store, 'this is the store at the home page!');
  return {
    userInfo: store.userReducer.userInfo
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
