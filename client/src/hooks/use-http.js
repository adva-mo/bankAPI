import { useState } from "react";

export const useHttp = (configObj, setData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    console.log("in hook");
    setIsLoading(true);
    try {
      const response = await fetch("/users", {
        method: configObj.method ? configObj.method : "GET",
        withCredentials: true,
        crossorigin: true,
        mode: "no-cors",
        headers: configObj.headers ? configObj.headers : {},
        body: configObj.body ? JSON.stringify(configObj.body) : null,
      });
      if (!response.ok) throw new Error("request failed");
      const data = await response.json();
      console.log(data);
      //set the data with a function from params
    } catch (e) {
      setError(e.message || "something went wrong");
    }
    setIsLoading(false);
  };
  return { isLoading, error, getData };
};