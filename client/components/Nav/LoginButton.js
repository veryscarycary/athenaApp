import React from 'react';
import { RoleAwareComponent } from 'react-router-role-authorization';
import { Link } from 'react-router';
import Cookies from 'js-cookie';

class LoginButton extends RoleAwareComponent {
  constructor(props) {
    super(props);


    if (Cookies.get('roles')) {
      this.userRoles = JSON.parse(Cookies.get('roles'));
    } else {
      this.userRoles = ['guest'];
    }
    this.allowedRoles = ['guest'];
  }

  render() {
    const jsx = (
      <li>
        <Link to='/login'>Login</Link>
      </li>
    );

    return this.rolesMatched() ? jsx : null;
  }
}

export default LoginButton;
