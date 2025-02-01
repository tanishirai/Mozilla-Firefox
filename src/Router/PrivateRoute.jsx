import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  // For now, we allow access to all users. You can customize this further if needed.
  return children ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
