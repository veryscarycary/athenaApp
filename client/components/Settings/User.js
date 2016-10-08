import React from 'react';

const User = ({user}) => (
  <tr>
    <td>
      {user._id}
    </td>
    <td>
      {user.username}
    </td>
    <td>
      {user.roles}
    </td>
  </tr>
);

export default User;
