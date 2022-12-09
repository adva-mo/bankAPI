import React, { useEffect } from "react";
import { useHttp } from "../../hooks/use-http";

function Homepage() {
  // eslint-disable-next-line
  const { isLoading, error, getData } = useHttp({ url: "/users" });

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      Homepage
      {isLoading ? <p>Loading...</p> : null}
    </div>
  );
}

export default Homepage;
