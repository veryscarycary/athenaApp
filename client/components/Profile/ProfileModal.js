import React from 'react';

import EditProfileForm from './EditProfileForm';

class ProfileModal extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <a href={`#openProfileModal`}>Edit Profile</a>

        <div id={`openProfileModal`} className="modalDialog">
          <div>
            <a href="#closeProfileModal" title="Close" className="closeModal">X</a>

            <EditProfileForm userInfo={this.props.userInfo} />
          </div>
        </div>
      </div>
    );
  }

}

export default ProfileModal;
