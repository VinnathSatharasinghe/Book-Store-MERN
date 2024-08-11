import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";


const NewProtectedRoute = () => {
  const isAuthenticated = useSelector(
    (state: { userauth: { isAuthenticated: boolean } }) =>
      state.userauth.isAuthenticated
  );

  console.log("ProtectedRoute - isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to="/tl" />;
};

export default NewProtectedRoute;


