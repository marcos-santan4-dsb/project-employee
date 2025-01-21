import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isAuthenticated, allowedRoles, user }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  while (!allowedRoles.includes(user.role)) {
    return <Navigate to="/view-dash" />;
  }

  return children;
}

export default ProtectedRoute;
