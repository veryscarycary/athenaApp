import fetch from 'isomorphic-fetch';

const STD_HDR = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const userUtils = {
  getUser: sessionId => {
    return fetch(`/api/user${sessionId != undefined ? `?id=${sessionId}` : ''}`, {
      method: 'GET',
      headers: STD_HDR
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error getting the tickets!'))
  },
  submitProfileEdits: (sessionId) => {
    if (document.getElementById(`editName`).value.split(' ').length > 2) {
      alert('Please enter only your first name and last name.');
    }
    return fetch(`/api/user`, {
      method: 'PUT',
      headers: STD_HDR,
      body: JSON.stringify({
        id: sessionId,
        firstName: document.getElementById('editName').value.split(' ')[0],
        lastName: document.getElementById('editName').value.split(' ')[1],
        username: document.getElementById('editUsername').value,
        phoneNumber: document.getElementById('editPhoneNumber').value,
        email: document.getElementById('editEmail').value,
        bio: document.getElementById('editBio').value
      })
    })
    .then(response => response.json())
    .catch(error => console.log(error, 'There was an error while editing the ticket!'));
  },
  submitPermissions: (sessionId, password, role) => {
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
  changePassword: (sessionId, password, newPassword) => {
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
  }
};

export default userUtils;
