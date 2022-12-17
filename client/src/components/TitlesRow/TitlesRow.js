import React from "react";
import "./TitlesRow.css";

function TitlesRow({ titles }) {
  return (
    <tr>
      {titles.map((title) => {
        return <td>{title}</td>;
      })}
    </tr>
  );
}

export default TitlesRow;
