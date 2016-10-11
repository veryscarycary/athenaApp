import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import RouteHandler from '../RouteHandler';
import { AuthorizedComponent } from 'react-router-role-authorization';
import Scatter from './Scatter';
import Pie from './Pie';
import Area from './Area';

class DashboardContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';
  }

  render () {
    return (
      <div className='container bg-warning'>
        <h1>Debuting the new Admin Dashboard.</h1>
        <h2>Your one-stop source for intelligent product analytics.</h2>
        <div className='rowFlexClose'>
          <Scatter />
          <Pie />
          <Area />
        </div>
      </div>
    );
  }
};

export default DashboardContainer;
