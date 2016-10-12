import React from 'react';
import Cookies from 'js-cookie';
import { AuthorizedComponent } from 'react-router-role-authorization';
import sessionUtils from '../../utils/sessionUtils';
import ProfileInfo from './ProfileInfo';
import UsersDisplay from './UsersDisplay';
import userUtils from '../../utils/userUtils';
import EditPictureForm from './EditPictureForm';

class ProfileContainer extends AuthorizedComponent {
  constructor (props) {
    super(props)

    this.userRoles = JSON.parse(Cookies.get('roles')); //deserialize json array
    this.notAuthorizedPath = '/not-found';

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        roles: [],
        email: '',
        phoneNumber: '',
        bio: '',
        pictureUrl: '',
        dateSignedUp: '',
        dateLastLogin: '',
        dateProfileLastUpdated: ''
      }
    };
  }

  componentWillMount () {
    sessionUtils.checkSession();

    userUtils.getUser(Cookies.get('sessionId')).then( (users)=> this.setState({user: users[0]}) );
  }

  render () {
    return (
      <div className='container bg-warning'>
        <div className='row'>
          <div className='col-xs-4 col-xs-push-1'>
            <h1>Profile</h1>
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-4 col-xs-push-1'>
            <img src={this.state.pictureUrl} className='profilePicture' />
          </div>

          <div className='col-xs-6 col-xs-push-2'>
            <ProfileInfo user={this.state.user} />
          </div>
        </div>

        <div className='row col-md-6 col-md-push-1'>
          <button className='btn btn-default' data-toggle='collapse' data-target='#content'>Change Profile Picture</button>
          <div className='collapse' id='content'>
            <EditPictureForm user={this.state.user} className='collapse' id='content' />
          </div>
        </div>
        <button onClick={()=> {alert(JSON.stringify(this.state))} }>Check Me</button>

        <div className='row'>
          <div className='col-xs-10 col-xs-push-1'>
            <h2>Search Users</h2>
            <UsersDisplay />
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
