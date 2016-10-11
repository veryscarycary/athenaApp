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

  submitPermissions (sessionId, password, radioElements, e, username) {
    e.preventDefault();

    for(var i = 0; i < radioElements.length; i++){
      if(radioElements[i].checked){
        var role = radioElements[i].value;
      }
    }

    userUtils.submitPermissions(sessionId, password, role)
      .then(() => this.toggleNotification(username))
      .catch(() => alert('Error! Permissions were not changed.'));
  };

  render () {
    const { isActive } = this.state;

    return (
      <tr>
        <td>
          {this.props.user.username}
        </td>
        <td data-th="User">
          <input type="radio" name={this.props.user.username} value='user' />
        </td>
        <td data-th="User Plus">
          <input type="radio" name={this.props.user.username} value='userPlus'/>
        </td>
        <td data-th="Admin">
          <input type="radio" name={this.props.user.username} value='admin' />
        </td>
        <td>
            <div>
              <button
              onClick={ (e) => {this.submitPermissions(this.props.user._id, this.props.user.password, document.getElementsByName(this.props.user.username), e, this.props.user.username);} }
              children={!isActive ? "Show notification" : "Hide notification"}
              >Change</button>

              <Notification
              isActive={this.state.isActive}
              message={`Permissions for ${this.state.usernameChanged} were changed!`}
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
