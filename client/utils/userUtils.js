import fetch from 'isomorphic-fetch';

const userUtils = {
  getUsers: () => {
    return fetch('http://localhost:3000/api/user', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error getting the tickets!');
    })
  },
  getUser: (sessionId) => {
    return fetch(`http://localhost:3000/api/user/${sessionId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error getting the tickets!');
    })
  },
  submitProfileEdits: (sessionId, password) => {
    if (document.getElementById(`editName`).value.split(' ').length > 2) {
      alert('Please enter only your first name and last name.');
    }
    return fetch(`http://localhost:3000/api/user/${sessionId}/${password}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: document.getElementById('editName').value.split(' ')[0].trim(),
        lastName: document.getElementById('editName').value.split(' ')[1].trim(),
        username: document.getElementById('editUsername').value.trim(),
        phoneNumber: document.getElementById('editPhoneNumber').value.trim(),
        email: document.getElementById('editEmail').value.trim(),
        bio: document.getElementById('editBio').value.trim()
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error while editing the ticket!');
    });
  },
  changeProfilePicture: (sessionId, password) => {
    return fetch(`http://localhost:3000/api/user/${sessionId}/${password}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pictureUrl: document.getElementById('pictureUrl').value.trim()
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error while editing the ticket!');
    });
  },
  submitPermissions: (sessionId, password, role) => {
    return fetch(`http://localhost:3000/api/user/${sessionId}/${password}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        roles: [role]
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error while editing the ticket!');
    });
  },
  deleteUser: (sessionId, password) => {
    return fetch(`http://localhost:3000/api/user/${sessionId}/${password}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      return response;
    })
    .catch(error => {
      console.log(error, 'There was an error while editing the ticket!');
    });
  }
};

export default userUtils;
