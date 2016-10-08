import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import beefalo from '../../images/beefalo.png';
import DashboardButton from './DashboardButton';
import ProfileButton from './ProfileButton';
import SettingsButton from './SettingsButton';

import sessionUtils from '../../utils/sessionUtils';

const goToHomePage = () => {
  // e.preventDefault();
  browserHistory.push('/');
};

const signout = () => {
  sessionUtils.signout();
  browserHistory.push('/login');
}

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" onClick={goToHomePage}>
                <img id='beefaloLogo' src={beefalo} alt="" />
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
                  <DashboardButton />
                  <ProfileButton />
                  <SettingsButton />
                  <li>
                    <Link onClick={signout} className='logoutNav'>Logout</Link>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
);

export default Nav;
