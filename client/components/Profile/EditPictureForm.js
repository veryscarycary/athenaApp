import React from 'react';

import userUtils from '../../utils/userUtils';


export default class EditPictureForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pictureUrl: ''
    };
  }


  setPicture (event) {
    this.setState({
      pictureUrl: event.target.value,
    });
  }

  editProfilePicture () {
    userUtils.changeProfilePicture(this.props.user._id, this.props.user.password).then( () => this.props.renderPic() );
  }

  render () {
    return (
      <form action='/profile' method='' onSubmit={() => {this.editProfilePicture()} }>
        <div className='form-group'>
          <label htmlFor='pictureUrl'>Picture Url:</label>
          <input type='text' className='form-control' id='pictureUrl' onChange={this.setPicture.bind(this)} value={this.state.pictureUrl} />
        </div>
        <div className='form-group'>
          <input type='submit' className='btn btn-default' id='Submit' />
        </div>
      </form>
    );
  }
};
