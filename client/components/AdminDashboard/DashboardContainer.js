import React from 'react';
import { connect } from 'react-redux';
// import Cookies from 'js-cookie';
import RouteHandler from '../RouteHandler';
import { AuthorizedComponent } from 'react-router-role-authorization';

class DashboardContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.userRoles = Cookies.get('user').roles;
    this.notAuthorizedPath = '/not-found';
  }

  render () {
    return (
      <div className='container bg-warning'>
        <RouteHandler {...this.props} />
      </div>
    );
  }
};

export default DashboardContainer;
