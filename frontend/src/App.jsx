import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserAuthentication from "./pages/UserAuthentication";
import AddDashPage from "./pages/AddDashPage";
import ViewDashPage from "./pages/ViewDashPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
  };

  const isAuthenticated = !!user;

  return (
    <Router>
      <Routes>
        {/* Rota de Login */}
        <Route
          path="/"
          element={<UserAuthentication onLogin={handleLogin} />}
        />

        {/* Rotas Protegidas */}
        <Route
          path="/add-dash"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              allowedRoles={["admin"]}
              user={user}
            >
              <AddDashPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view-dash"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              allowedRoles={["admin", "user"]}
              user={user}
            >
              <ViewDashPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
