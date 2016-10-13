import React from 'react';
import Cookies from 'js-cookie';

import userUtils from '../../utils/userUtils';
import ProfileModal from './ProfileModal';

export default class ProfileInfo extends React.Component {
  constructor (props) {
    super(props)

  }

  render () {
    return (
      <div>
        <p><strong>Name: </strong>{`${this.props.user.firstName} ${this.props.user.lastName}`}</p>
        <p><strong>Username: </strong>{`${this.props.user.username}`}</p>
        <p><strong>Bio: </strong>{`${this.props.user.bio}`}</p>
        <p><strong>Email: </strong>{`${this.props.user.email}`}</p>
        <p><strong>Phone Number: </strong>{`${this.props.user.phoneNumber}`}</p>
        <p><strong>Roles: </strong>{this.props.user.roles}</p>
        <p><strong>Account Created: </strong>{this.props.user.dateSignedUp}</p>
        <p><strong>Last Login: </strong>{this.props.user.dateLastLogin}</p>
        <p><strong>Profile Last Updated: </strong>{this.props.user.dateProfileLastUpdated}</p>
        <ProfileModal userInfo={this.props.user} />
      </div>
    )
  }
};
