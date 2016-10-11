import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';

import User from './User';
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
        <h2>Manage user permissions here</h2>

          <table className='table table-bordered settingsTable table-striped'>
            <thead>
              <tr>
                <th>
                  ID
                </th>
                <th>
                  User
                </th>
                <th>
                  Privileges
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <User user={user} />
              ))}
            </tbody>
          </table>

        {/*return a list of users and their respective roles*/}
        {/*return a list of users and their respective roles*/}
        {/*public kbs and */}
      </div>
    );
  }
};

export default SettingsContainer;
