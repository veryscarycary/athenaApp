import React from 'react';

import EditProfileForm from './EditProfileForm';

class ProfileModal extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
          <div>
            <EditProfileForm userInfo={this.props.userInfo} />
          </div>
      </div>
    );
  }

}

export default ProfileModal;
