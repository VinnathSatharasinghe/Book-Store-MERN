
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const NewProtectedRoute = () => {
  // Access the authentication state from the Redux store
  const isAuthenticated = useSelector((state) => state.userauth.isAuthenticated);

  console.log("NewProtectedRoute - isAuthenticated:", isAuthenticated);

  // Render loading message while authentication status is undefined
  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  // Render children if authenticated, otherwise redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/tl" />;
};

export default NewProtectedRoute;



