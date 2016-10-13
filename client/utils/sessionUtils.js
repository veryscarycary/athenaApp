import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
import Cookies from 'js-cookie';

const cred = 'same-origin'
const STD_HDR = {
  'Content-Type': 'application/json'
};
export default {
  setSession (username, password, context, getAuthLevel, loadCurrentUser) {
    return fetch(`/api/signin`, {
      method: 'PUT',
      headers: STD_HDR,
      credentials: cred,
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => {
      if (res.status === 200) {
        //redirect to homepage
        return res.json().then(sessionObj => {
          Cookies.set('sessionId', sessionObj._id);
          console.log('This is your role: ',sessionObj.roles);
          Cookies.set('roles', JSON.stringify(sessionObj.roles)); // Cookies only hold strings

          getAuthLevel(JSON.parse(Cookies.get('roles')));
          loadCurrentUser(sessionObj._id).then(() => browserHistory.push('/'));
        });
      } else {
        context.setState({userNameDoesNotExist: true}, () => 
            setTimeout(() => 
              context.setState({userNameDoesNotExist: false}), 
            3000)
        );
      }
    }).catch(err => console.log('There was an error during Login! D=', err));
  },

  checkSession () {
    return fetch('/api/signin', {
      method: 'GET',
      headers: STD_HDR,
      credentials: cred
    })
    .then(res => {
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
    .catch(error => console.log(error, 'There was an error getting the session!'));
  },
  signout () {
    Cookies.set('roles', ['guest']);
    Cookies.remove('sessionId');
    return fetch('/api/signin', {
      method: 'DELETE',
      headers: STD_HDR,
      credentials: cred
    })
    .catch(error => console.log(error, 'There was an error getting the session!'));
  }
};