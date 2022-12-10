import React, { useContext } from "react";
import bankData from "../../context/context";
import TitlesRow from "../TitlesRow/TitlesRow";
import Row from "../Row/Row";
import "./Table.css";

function Table({ category }) {
  const bankCTX = useContext(bankData);
  const dataToDisplay = bankCTX[category];

  return (
    <table>
      <thead>
        <TitlesRow />
      </thead>
      <tbody>
        {dataToDisplay.map((row) => {
          return <Row {...row} key={row.uid} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
