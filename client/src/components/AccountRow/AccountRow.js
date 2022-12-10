import React from "react";

function AccountRow({ cash, credit, type, owner, uid, usedCredit }) {
  return (
    <tr>
      <td>{uid}</td>
      <td>{type}</td>
      <td>{owner}</td>
      <td>{cash}</td>
      <td>{credit}</td>
      <td>{usedCredit}</td>
    </tr>
  );
}

export default AccountRow;
