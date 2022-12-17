import React from "react";
import "./TitlesRow.css";

function TitlesRow({ titles }) {
  return (
    <tr>
      {titles.map((title) => {
        if (title !== "__v") return <td>{title}</td>;
        else return null;
      })}
    </tr>
  );
}

export default TitlesRow;
