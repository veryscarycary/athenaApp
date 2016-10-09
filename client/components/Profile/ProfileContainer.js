import React from 'react';
import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';

import ProfileInfo from './ProfileInfo';

class ProfileContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';
  }

  render () {
    return (
      <div className='container bg-warning'>
        <h1>Profile</h1>
          <div className='row'>
            <div className='col-xs-4 col-xs-push-1'>
              <img src='../../images/ProfilePicture1.jpg' className='profilePicture' />
            </div>

            <div className='col-xs-6 col-xs-push-2'>
              <ProfileInfo />
            </div>
          </div>
          {/*return a list of users and their respective roles*/}
          {/*return a list of users and their respective roles*/}
          {/*public kbs and */}
      </div>
    );
  }
};

export default ProfileContainer;
