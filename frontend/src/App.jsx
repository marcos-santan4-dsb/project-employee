import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddDashPage from "./pages/AddDashPage";
import ViewDashPage from "./pages/ViewDashPage";
import { useState } from "react";
import "./global.css";
import UserAuthentication from "./pages/UserAuthentication";

function App() {
  const [data, setData] = useState([]);

  function handleNewDash(newData) {
    setData((prevData) => [...prevData, newData]);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AddDashPage onNewDashAdded={handleNewDash} />}
        />
        <Route path="/view" element={<ViewDashPage />} />
        <Route path="/authentic" element={<UserAuthentication />} />
      </Routes>
    </Router>
  );
}

export default App;
