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
    userUtils.editProfilePicture()
  }

  render () {
    return (
      <div className='row'>
        <div className='col-xs-12 editTicketForm'>
          <form action='/profile' method='' onSubmit={() => {this.editProfilePicture(this.props.ticket._id)}}>
            <div className='form-group'>
              <label htmlFor='pictureUrl'>Picture:</label>
              <input type='text' className='form-control' id={`pictureUrl${this.props.ticket._id}`} onChange={this.setPicture.bind(this)} value={this.state.pictureUrl} />
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='Submit' />
            </div>
          </form>
    );
  }
};
