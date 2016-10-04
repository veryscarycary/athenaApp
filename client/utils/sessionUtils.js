import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

const sessionUtils = {
  setSession: (username, password) => {
    fetch(`http://localhost:3000/api/signin/${username}/${password}`, {
      method: 'GET',
      credentials: 'same-origin'
    }).then((res) => {
      if (res.status === 200) {
        //redirect to homepage
        return res.text().then(text => {
          // this.props.loadSessionId(text);  no longer need, keeping just in case
          sessionStorage.setItem('sessionId', text);
          browserHistory.push('/');
        });
      } else {
        this.setState({userNameDoesNotExist: true}, () => setTimeout(() =>
        {this.setState({userNameDoesNotExist: false})}, 3000));
      }
    }).catch((err) => {
      console.log('There was an error during Login! D=', err);
    });
  },
  checkSession: () => {
    return fetch('http://localhost:3000/api/session', {
      method: 'GET',
      credentials: 'same-origin'
    })
    .then(function (res) {
      if (res.status === 401 || res.status === 404) {
        // you don't belong here, stranger
        browserHistory.push('/login');
      } else {
        return res.json().then((json) => {
          if (sessionStorage.getItem('sessionId') !== json._id) {
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
      method: 'DELETE',
      credentials: 'same-origin'
    })
    .catch(error => {
      console.log(error, 'There was an error getting the session!');
    });
  }
};

export default sessionUtils;
