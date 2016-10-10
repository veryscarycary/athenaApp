import React from 'react';
import userUtils from '../../utils/userUtils';

import User from './User';

class UsersDisplay extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    };
  };

  componentWillMount () {
    // set users in state
    userUtils.getUsers().then( (users)=> this.setState({users: users}, () => {console.log(this.state)}) );
  }

  render () {
    return (
      <div className='box-table'>
        <table>
          <thead>
            <tr>
              <th>
                Username
              </th>
              <th>
                Name
              </th>
              <th>
                Email
              </th>
              <th>
                Phone Number
              </th>
              <th>
                Roles
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => (
              <User user={user} />
            ))}
          </tbody>
        </table>
      </div>
    )
  };
}


export default UsersDisplay;
