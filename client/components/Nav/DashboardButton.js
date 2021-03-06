import React from 'react';
import { RoleAwareComponent } from 'react-router-role-authorization';
import { Link } from 'react-router';
import Cookies from 'js-cookie';

class DashboardButton extends RoleAwareComponent {
  constructor(props) {
    super(props);

    this.allowedRoles = ['admin'];

    if (Cookies.get('roles')) {
      this.userRoles = JSON.parse(Cookies.get('roles'));
    } else {
      this.userRoles = ['guest'];
    }
  }

  render() {
    const jsx = (
      <li>
        <Link
        activeClassName="active"
        to='/dashboard'>
        Dashboard</Link>
      </li>
    );

    return this.rolesMatched() ? jsx : null;
  }
}

export default DashboardButton;
