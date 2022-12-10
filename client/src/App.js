import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/hompage/Homepage";
import NewUserPage from "./pages/NewUserPage/NewUserPage";
import NewTransactionPage from "./pages/NewTransactionPage/NewTransactionPage";
import bankData from "./context/context";
import { useHttp } from "./hooks/use-http";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  // const [currentUser, setcurrentUser] = useState(null);

  const { isLoading, error, getData } = useHttp({ url: "/api/bank" }, setData);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {isLoading ? <p>Loading...</p> : null}
      {data ? (
        <bankData.Provider value={data}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/new-user" element={<NewUserPage />} />
            <Route path="/new-transaction" element={<NewTransactionPage />} />
          </Routes>
        </bankData.Provider>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
