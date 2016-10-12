import React from 'react';
import { RoleAwareComponent } from 'react-router-role-authorization';
import { Link } from 'react-router';
import Cookies from 'js-cookie';

class TicketsButton extends RoleAwareComponent {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.allowedRoles = ['user', 'admin'];
=======
    this.allowedRoles = ['admin'];
>>>>>>> d1bf07678352006c6475da793603f80692a301e4

    if (Cookies.get('roles')) {
      this.userRoles = JSON.parse(Cookies.get('roles'));
    } else {
      this.userRoles = ['guest'];
    }
  }

  render() {
    const jsx = (
      <li>
        <Link to='/tickets'>Tickets</Link>
      </li>
    );

    return this.rolesMatched() ? jsx : null;
  }
}

export default TicketsButton;
