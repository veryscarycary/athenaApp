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
        firstName: document.getElementById('editName').value.split(' ')[0],
        lastName: document.getElementById('editName').value.split(' ')[1],
        username: document.getElementById('editUsername').value,
        phoneNumber: document.getElementById('editPhoneNumber').value,
        email: document.getElementById('editEmail').value,
        bio: document.getElementById('editBio').value
      })
    })
    .then(function (response) {
      return response.json();
    })
    .catch(error => {
      console.log(error, 'There was an error while editing the ticket!');
    });
  }
};

export default userUtils;
