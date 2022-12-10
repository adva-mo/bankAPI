import React, { useState } from "react";
import Table from "../Table/Table";
import "./Users.css";

function Users() {
  return (
    <div>
      <h2>USERS</h2>
      <Table category="users" />
    </div>
  );
}

export default Users;
