import React from 'react';
import { RoleAwareComponent } from 'react-router-role-authorization';
import { Link } from 'react-router';
import Cookies from 'js-cookie';

class SettingsButton extends RoleAwareComponent {
  constructor(props) {
    super(props);

    this.allowedRoles = ['admin'];
    this.userRoles = JSON.parse(Cookies.get('roles'));
  }

  render() {
    const jsx = (
      <li>
        <Link to='/settings'>Settings</Link>
      </li>
    );

    return this.rolesMatched() ? jsx : null;
  }
}

export default SettingsButton;
