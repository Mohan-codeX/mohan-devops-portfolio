import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/token";

const ProtectedRoute = () => {
  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export default ProtectedRoute;