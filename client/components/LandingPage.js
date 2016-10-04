import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import sessionUtils from '../utils/sessionUtils';

import * as actionCreators from '../actions/index';


class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount () {
    // actually needs to run check session with the server instead
    console.log(sessionStorage.sessionId, 'SESSIONID ON LANDING');
    sessionUtils.checkSession();
  }

  goToLandingPage() {
    // e.preventDefault();
    browserHistory.push('/');
  }

  signout() {
    sessionUtils.signout();
    browserHistory.push('/login');
  }

  render () {
    return (
      <div className="landing-page">

        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" onClick={this.goToLandingPage.bind(this)}>
                      <img id='beefaloLogo' src="./images/beefalo.png" alt="" />
                    </a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                          <Link to='/articles'>Articles</Link>
                        </li>
                        <li>
                          <Link to='/tickets'>Tickets</Link>
                        </li>
                        <li>
                          <Link onClick={this.signout} className='logoutNav'>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        {this.props.children}
      </div>
    )
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
