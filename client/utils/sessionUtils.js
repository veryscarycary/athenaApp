import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';

const sessionUtils = {
  setSession: (username, password, context) => {
    return fetch(`http://localhost:3000/api/signin/${username}/${password}`, {
      method: 'GET',
      credentials: 'same-origin'
    }).then((res) => {
      if (res.status === 200) {
        //redirect to homepage
        return res.json().then(sessionObj => {
          Cookies.set('sessionId', sessionObj._id);
          console.log('This is your role: ',sessionObj.roles);
          Cookies.set('roles', JSON.stringify(sessionObj.roles)); // Cookies only hold strings
        });
      } else {
        context.setState({userNameDoesNotExist: true}, () => setTimeout(() =>
        {context.setState({userNameDoesNotExist: false})}, 3000));
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
        console.log('Cookie Session', Cookies.get('sessionId'));
        console.log('Cookie Roles', Cookies.get('roles'));
        return res.json().then((json) => {
          if (Cookies.get('sessionId') !== json._id) {
            // if session exists, but is different from server's
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
    Cookies.set('roles', ['guest']);
    Cookies.remove('sessionId');
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
