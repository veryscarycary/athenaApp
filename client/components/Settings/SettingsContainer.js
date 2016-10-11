import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';

import PermissionsTable from './PermissionsTable';
import RolesTable from './RolesTable';
import userUtils from '../../utils/userUtils';

class SettingsContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    };

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';
  }

  componentWillMount () {
    // // set users in state
    // this.props.loadTicketState();
    userUtils.getUsers().then( (users)=> this.setState({users: users}) );
  }

  render () {
    return (
      <div className='container bg-warning centerFlex'>
        <h1>Settings</h1>
        <h4>Roles and Permissions</h4>
        <RolesTable />
        <br />
        <h4>Manage user permissions here</h4>
        <PermissionsTable users={this.state.users} />
        {/*return a list of users and their respective roles*/}
        {/*return a list of users and their respective roles*/}
        {/*public kbs and */}
      </div>
    );
  }
};

export default SettingsContainer;
