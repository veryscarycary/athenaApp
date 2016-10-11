import React from 'react';

import User from './User';

export default class PermissionsTable extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <table className='PermissionsTable'>
        <thead>
          <tr>
            <th>
              Username
            </th>
            <th>
              User
            </th>
            <th>
              User Plus
            </th>
            <th>
              Admin
            </th>
            <th>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.props.users.map(user => (
            <User user={user} />
          ))}
        </tbody>
      </table>
    );
  }
};
