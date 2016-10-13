import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import beefalo from '../../images/beefalo.png';
import DashboardButton from './DashboardButton';
import TicketsButton from './TicketsButton';
import ProfileButton from './ProfileButton';
import SettingsButton from './SettingsButton';
import { connect } from 'react-redux';
import { getAuthLevel } from '../../actions';

import sessionUtils from '../../utils/sessionUtils';



const NavContainer = ({dispatch}) => {
  const goToHomePage = () => {
    // e.preventDefault();
    browserHistory.push('/');
  };

  const signout = () => {
    sessionUtils.signout();
    dispatch(getAuthLevel(['guest']))
    browserHistory.push('/login');
  }
  return (
    <div className="nav-container">
      <nav className="side-nav" role="navigation">
        <ul className="nav-items">
          <li>
            <Link to='/articles'
              activeClassName="active">
              Articles
            </Link>

          </li>
          <TicketsButton />
          <DashboardButton />
          <ProfileButton />
          <SettingsButton />
        </ul>
      </nav>
      <div className="top-nav">
        <Link onClick={signout}
          className='logoutnav'>Logout</Link>
      </div>
    </div>
  )
};

const Nav = connect()(NavContainer);

export default Nav;

//                <a className="navbar-brand" onClick={goToHomePage}>
//                  <img id='beefaloLogo' src={beefalo} alt="" />
//                </a>
