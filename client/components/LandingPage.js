import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import Nav from './Nav';

import sessionUtils from '../utils/sessionUtils';

import * as actionCreators from '../actions/index';


class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    sessionUtils.checkSession();
  }


  render () {
    return (
      <div className="landing-page">
      <Nav />

        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
