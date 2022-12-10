import React, { useEffect, useState } from "react";
// import { useHttp } from "../../hooks/use-http";
import Users from "../../components/Users/Users";

function Homepage() {
  // const [data, setData] = useState(null);
  // // const [currentUser, setcurrentUser] = useState(null);

  // const { isLoading, error, getData } = useHttp({ url: "/api/bank" }, setData);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <div className="main-container flex-row">
        <Users />
        {/* <Accounts />
            <Account /> */}
      </div>
    </div>
  );
}

export default Homepage;
