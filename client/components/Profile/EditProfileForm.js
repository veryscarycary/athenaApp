import React from 'react';
import { connect } from 'react-redux';

import userUtils from '../../utils/userUtils';


export default class EditProfileForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {};
  }

  componentWillReceiveProps () {
    this.setState({
      userInfo: this.props.userInfo,
      editName: `${this.props.userInfo.firstName} ${this.props.userInfo.lastName}`,
      editUsername: this.props.userInfo.username,
      editEmail: this.props.userInfo.email,
      editPhoneNumber: this.props.userInfo.phoneNumber,
      editBio: this.props.userInfo.bio
    });
  }

  setName (event) {
    this.setState({
      editName: event.target.value,
    });
  }
  setUsername (event) {
    this.setState({
      editUsername: event.target.value,
    });
  }

  setPhoneNumber (event) {
    this.setState({
      editPhoneNumber: event.target.value,
    });
  }

  setEmail (event) {
    this.setState({
      editEmail: event.target.value,
    });
  }

  setBio (event) {
    this.setState({
      editBio: event.target.value,
    });
  }


  submitProfileEdits (sessionId, password) {
    userUtils.submitProfileEdits(sessionId, password);
  }

  render() {
    return (
      <div className='row'>
        <div>
          <form action='/profile' method='' onSubmit={ () => { this.submitProfileEdits(this.state.userInfo._id, this.state.userInfo.password).bind(this) } }>
            <div className='form-group'>
              <label htmlFor='editName'>Name:</label>
              <input type='text' className='form-control' id='editName' onChange={this.setName.bind(this)} value={this.state.editName} />
            </div>
            <div className='form-group'>
              <label htmlFor='editUsername'>Username:</label>
              <input type='text' className='form-control' id='editUsername' onChange={this.setUsername.bind(this)} value={this.state.editUsername} />
            </div>
            <div className='form-group'>
              <label htmlFor='editPhoneNumber'>PhoneNumber:</label>
              <input type='text' className='form-control' id='editPhoneNumber' onChange={this.setPhoneNumber.bind(this)} value={this.state.editPhoneNumber} />
            </div>
            <div className='form-group'>
              <label htmlFor='editEmail'>Email:</label>
              <input type='text' className='form-control' id='editEmail' onChange={this.setEmail.bind(this)} value={this.state.editEmail}/>
            </div>
            <div className='form-group'>
              <label htmlFor='editBio'>Bio:</label>
              <textarea className="form-control" rows="5" id='editBio' onChange={this.setBio.bind(this)} value={this.state.editBio}/>
            </div>
            <div className='form-group'>
              <input type='submit' className='btn btn-default' id='editSubmit' />
            </div>
          </form>
        </div>
      </div>
    );
  };
};
