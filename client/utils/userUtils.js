import fetch from 'isomorphic-fetch';

const STD_HDR = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export default {
  getUser (sessionId) {
    return fetch(`/api/user${sessionId != undefined ? `?id=${sessionId}` : ''}`, {
      method: 'GET',
      headers: STD_HDR
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error getting the tickets!'))
  },
  submitProfileEdits (sessionId) {
    if (document.getElementById(`editName`).value.split(' ').length > 2) {
      alert('Please enter only your first name and last name.');
    }
    return fetch(`/api/user`, {
      method: 'PUT',
      headers: STD_HDR,
      body: JSON.stringify({
        id: sessionId,
        firstName: document.getElementById('editName').value.split(' ')[0].trim(),
        lastName: document.getElementById('editName').value.split(' ')[1].trim(),
        username: document.getElementById('editUsername').value.trim(),
        phoneNumber: document.getElementById('editPhoneNumber').value.trim(),
        email: document.getElementById('editEmail').value.trim(),
        bio: document.getElementById('editBio').value.trim()
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error while editing the ticket!'));
  },
  changeProfilePicture (sessionId) {
    return fetch(`/api/user`, {
      method: 'PUT',
      headers: STD_HDR,
      body: JSON.stringify({
        id: sessionId,
        pictureUrl: document.getElementById('pictureUrl').value.trim()
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error while editing the ticket!'));
  },
  submitPermissions (sessionId, role) {
    return fetch(`/api/user`, {
      method: 'PUT',
      headers: STD_HDR,
      body: JSON.stringify({
        id: sessionId,
        roles: [role]
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error while editing the ticket!'));
  },
  changePassword (sessionId, password, newPassword) {
    return fetch(`/api/user`, {
      method: 'PUT',
      headers: STD_HDR,
      body: JSON.stringify({
        id: sessionId,
        password: password,
        newPassword: newPassword
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error while editing the ticket!'));
  },
  deleteUser (sessionId) {
    return fetch(`/api/user`, {
      method: 'POST',
      headers: STD_HDR,
      body: JSON.stringify({
        id: sessionId
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error while editing the ticket!'));
  }
};
