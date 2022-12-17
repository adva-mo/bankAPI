import React from "react";

function AccountRow({ cash, credit, type, owner, _id, usedCredit }) {
  return (
    <tr>
      <td>{_id}</td>
      <td>{owner}</td>
      <td>{type}</td>
      <td>{cash}</td>
      <td>{credit}</td>
      <td>{usedCredit}</td>
    </tr>
  );
}

export default AccountRow;
