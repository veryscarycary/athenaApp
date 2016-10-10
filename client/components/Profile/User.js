import React from 'react';

const User = ({user}) => (
  <tr>
    <td>
      {user.username}
    </td>
    <td>
    {`${user.firstName} ${user.lastName}`}
    </td>
    <td>
      {user.email}
    </td>
    <td>
      {user.phoneNumber}
    </td>
    <td>
      {user.roles}
    </td>
  </tr>
);

export default User;
