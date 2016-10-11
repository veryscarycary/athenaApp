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
        <h1 className='centerText'>Admin Dashboard</h1>
        <h4 className='centerText'>Your one-stop source for intelligent product analytics.</h4>
        <br />
        <div className='row'>
          <div className='col-xs-6 col-xs-push-1'>
            <Scatter />
          </div>
          <div className='col-xs-6'>
            <Pie />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-xs-push-1'>
            <Area />
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardContainer;
