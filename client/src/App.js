import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/hompage/Homepage";
import NewUserPage from "./pages/NewUserPage/NewUserPage";
import NewTransactionPage from "./pages/NewTransactionPage/NewTransactionPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-user" element={<NewUserPage />} />
        <Route path="/new-transaction" element={<NewTransactionPage />} />
      </Routes>
      <h1>hello manager</h1>
    </div>
  );
}

export default App;
