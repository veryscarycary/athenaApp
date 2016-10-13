import React from 'react';
import { Notification } from 'react-notification';

import userUtils from '../../utils/userUtils';


export default class User extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isActive: false,
      usernameChanged: null
    };

    this.toggleNotification = this.toggleNotification.bind(this);
  }

  toggleNotification(username) {
    this.setState({
      isActive: !this.state.isActive,
      usernameChanged: username
    })
  }

  componentDidMount() {
    // if roles contains admin, select admin
    if (this.props.user.roles.indexOf('admin') !== -1) {
      document.getElementById(`${this.props.user.username}AdminRadio`).checked = 'checked';
    } else if (this.props.user.roles.indexOf('userPlus') !== -1) {
      document.getElementById(`${this.props.user.username}UserPlusRadio`).checked = 'checked';
    } else if (this.props.user.roles.indexOf('user') !== -1) {
      document.getElementById(`${this.props.user.username}UserRadio`).checked = 'checked';
    }
  }

  submitPermissions (sessionId, radioElements, e, username) {
    e.preventDefault();

    for(var i = 0; i < radioElements.length; i++){
      if(radioElements[i].checked){
        var role = radioElements[i].value;
      }
    }

    userUtils.submitPermissions(sessionId, role)
      .then(() => this.toggleNotification(username))
      .catch(() => alert('Error! Permissions were not changed.'));
  };

  deleteUser (sessionId, password, e, username) {
    e.preventDefault();

    userUtils.deleteUser(sessionId, password)
      .then(() => document.getElementById(`${this.props.user.username}Row`)
        .parentNode.removeChild( document.getElementById(`${this.props.user.username}Row`) ))
      .then(() => this.toggleNotification(username))
      .catch(() => console.log('Error! User was not deleted!'));
  }

  render () {
    const { isActive } = this.state;

    return (
      <tr id={`${this.props.user.username}Row`}>
        <td>
          {this.props.user.username}
        </td>
        <td data-th="User">
          <input type="radio" id={`${this.props.user.username}UserRadio`} name={this.props.user.username} value='user' />
        </td>
        <td data-th="User Plus">
          <input type="radio" id={`${this.props.user.username}UserPlusRadio`} name={this.props.user.username} value='userPlus'/>
        </td>
        <td data-th="Admin">
          <input type="radio" id={`${this.props.user.username}AdminRadio`} name={this.props.user.username} value='admin' />
        </td>
        <td>
            <div>
              <button
              onClick={ (e) => {this.submitPermissions(this.props.user._id, document.getElementsByName(this.props.user.username), e, this.props.user.username);} }
              children={!isActive ? "Show notification" : "Hide notification"}
              >Change</button>

              <button
              onClick={ (e) => {this.deleteUser(this.props.user._id, this.props.user.password, e, this.props.user.username);} }
              children={!isActive ? "Show notification" : "Hide notification"}
              >Delete User</button>

              <Notification
              isActive={this.state.isActive}
              message={`Permissions for ${this.state.usernameChanged} were updated!`}
              action="Dismiss"
              title="Success!"
              onDismiss={this.toggleNotification.bind(this)}
              onClick={() =>  this.setState({ isActive: false })}
              />

            </div>
        </td>
      </tr>
    );
  };
};
