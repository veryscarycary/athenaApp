import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';

import sessionUtils from '../../utils/sessionUtils';
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
    if (!JSON.parse(Cookies.get('roles')).includes('admin')) {browserHistory.push('/not-found');}
    sessionUtils.checkSession();
    // // set users in state
    // this.props.loadTicketState();
    userUtils.getUser().then( (users)=> this.setState({users: users}) );
  }

  render () {
    return (
      <div className='settingsContainer'>
      <div className="headings">
        <h1 className="title">Settings</h1>
        <h4 className="subtitle">Roles and Permissions</h4>
      </div>
        <RolesTable />
        <div className="headings gap">
        <h4>Manage user permissions here</h4>
        </div>
        <PermissionsTable users={this.state.users} />
        {/*return a list of users and their respective roles*/}
        {/*return a list of users and their respective roles*/}
        {/*public kbs and */}
      </div>
    );
  }
};

export default SettingsContainer;
