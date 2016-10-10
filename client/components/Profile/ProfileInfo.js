import React from 'react';
import Cookies from 'js-cookie';

import userUtils from '../../utils/userUtils';
import ProfileModal from './ProfileModal';

export default class ProfileInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        roles: [],
        email: '',
        phoneNumber: '',
        bio: '',
        dateSignedUp: '',
        dateLastLogin: '',
        dateProfileLastUpdated: ''
      }
    };
  }

  componentWillMount () {
    // set user in state
    userUtils.getUser(Cookies.get('sessionId')).then( (users)=> this.setState({user: users[0]}) );
  }

  render () {
    return (
      <div>
        <p><strong>Name: </strong>{`${this.state.user.firstName} ${this.state.user.lastName}`}</p>
        <p><strong>Username: </strong>{`${this.state.user.username}`}</p>
        <p><strong>Bio: </strong>{`${this.state.user.bio}`}</p>
        <p><strong>Email: </strong>{`${this.state.user.email}`}</p>
        <p><strong>Phone Number: </strong>{`${this.state.user.phoneNumber}`}</p>
        <p><strong>Roles: </strong>{this.state.user.roles}</p>
        <p><strong>Account Created: </strong>{this.state.user.dateSignedUp}</p>
        <p><strong>Last Login: </strong>{this.state.user.dateLastLogin}</p>
        <p><strong>Profile Last Updated: </strong>{this.state.user.dateProfileLastUpdated}</p>
        <ProfileModal userInfo={this.state.user} />
      </div>
    )
  }
};
