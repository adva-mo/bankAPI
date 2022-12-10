import React from "react";
import Table from "../../components/Table/Table";

function Homepage() {
  return (
    <div>
      <div className="main-container flex-row">
        <div className="half-main-content">
          <h2>USERS</h2>
          <Table category="users" />
        </div>
        <div className="half-main-content">
          <h2>ACCOUNTS</h2>
          <Table category="accounts" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
