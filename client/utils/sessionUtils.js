import fetch from 'isomorphic-fetch';

const sessionUtils = {
  checkSessionWithServer: () => {
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
      console.log(error, 'There was an error getting the session!');
    });
  },
};

export default sessionUtils;
