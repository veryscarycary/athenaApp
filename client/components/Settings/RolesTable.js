import React from 'react';

import check from "../../images/check.png";
import cross from "../../images/cross.png";

const RolesTable = () => (
  <table>
    <thead>
      <tr>
        <td></td>
        <td>Guest</td>
        <td>User</td>
        <td>User Plus</td>
        <td>Admin</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Read</td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
      </tr>
      <tr>
        <td>Create</td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
      </tr>
      <tr>
        <td>Edit</td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
      </tr>
      <tr>
        <td>Delete</td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
      </tr>
      <tr>
        <td>Control</td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/cross.png" width="16" height="16" alt="cross" /></td>
        <td><img src="../../images/check.png" width="16" height="16" alt="check" /></td>
      </tr>
    </tbody>
  </table>
);

export default RolesTable;
