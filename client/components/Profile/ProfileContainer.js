import React from 'react';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';

import userUtils from '../../utils/userUtils';

class ProfileContainer extends AuthorizedComponent {
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

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';
  }

  componentWillMount () {
    // // set users in state
    // this.props.loadTicketState();
    // userUtils.getUser(Cookies.get('sessionId')).then( (user)=> this.setState({user: user}) );
  }

  getUser () {
    let context = this;
    console.log(context);
    userUtils.getUser(Cookies.get('sessionId')).then( (users)=> context.setState({user: users[0]}) );
  }

  render () {
    return (
      <div className='container bg-warning'>
        <h1>Profile</h1>
          <div className='row'>
            <div className='col-xs-4 col-xs-push-1'>
              <img src='../../images/ProfilePicture1.jpg' className='profilePicture' />
            </div>

            <div className='col-xs-2 col-xs-push-2'>>
              <p><strong>Name: </strong>{`${this.state.user.firstName} ${this.state.user.lastName}`}</p>
              <p><strong>Username: </strong>{this.state.user.username}</p>
              <p><strong>Roles: </strong>{this.state.user.roles}</p>
              <p><strong>Email: </strong>{this.state.user.email}</p>
              <p><strong>Phone Number: </strong>{this.state.user.phoneNumber}</p>
              <p><strong>Bio: </strong>{this.state.user.bio}</p>
              <p><strong>Account Created: </strong>{this.state.user.dateSignedUp}</p>
              <p><strong>Last Login: </strong>{this.state.user.dateLastLogin}</p>
              <p><strong>Profile Last Updated: </strong>{this.state.user.dateProfileLastUpdated}</p>
            </div>
          </div>
          <button onClick={this.getUser.bind(this)}>Test</button>

          {/*return a list of users and their respective roles*/}
          {/*return a list of users and their respective roles*/}
          {/*public kbs and */}
      </div>
    );
  }
};

export default ProfileContainer;
