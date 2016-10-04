import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

const sessionUtils = {
  checkSession: (context) => {
    return fetch('http://localhost:3000/api/session', {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(function (res) {
      console.log(context, 'this inside sessionutils fetch')
      if (res.status === 401 || res.status === 404) {
        // you don't belong here, stranger
        browserHistory.push('/login');
      } else {
        return res.json().then((json) => {
          console.log(json, '<= this is the text to match sessionId');
          if (context.props.sessionId !== json._id) {
            // yerrr outta here!
            browserHistory.push('/login');
          }
        });
      }
    })
    .catch(error => {
      console.log(error, 'There was an error getting the session!');
    });
  },
  signout: () => {
    return fetch('http://localhost:3000/api/session', {
      method: 'delete'
    })
    .catch(error => {
      console.log(error, 'There was an error getting the session!');
    });
  }
};

export default sessionUtils;
