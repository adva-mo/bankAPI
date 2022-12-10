import React from "react";
import "./Row.css";

function Row({ name, lastName, id, isActive }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{lastName}</td>
      <td>{id}</td>
      <td>{isActive ? "active" : "not active"}</td>
    </tr>
  );
}

export default Row;
