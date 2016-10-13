import React from 'react';
import { RoleAwareComponent } from 'react-router-role-authorization';
import { Link } from 'react-router';
import Cookies from 'js-cookie';

class ProfileButton extends RoleAwareComponent {
  constructor(props) {
    super(props);

    this.allowedRoles = ['user', 'admin'];
    
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
        to='/profile'>Profile</Link>
      </li>
    );

    return this.rolesMatched() ? jsx : null;
  }
}

export default ProfileButton;
