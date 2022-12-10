import React from "react";

function AccountRow({ cash, credit, type, owner, uid }) {
  return (
    <tr>
      <td>{uid}</td>
      <td>{type}</td>
      <td>{owner}</td>
      <td>{credit}</td>
      <td>{cash}</td>
    </tr>
  );
}

export default AccountRow;
