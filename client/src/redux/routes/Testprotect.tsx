import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, tokenExpiration } = useSelector((state: any) => ({
    isAuthenticated: state.userauth.isAuthenticated,
    tokenExpiration: state.userauth.tokenExpiration,
  }));
  
  const location = useLocation();

  const currentTime = Date.now();
  const isTokenExpired = tokenExpiration ? currentTime > tokenExpiration : true;

  // If authentication state is not determined yet (e.g., checking local storage), show loading.
  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  // Redirect to login if not authenticated or if the token has expired.
  if (!isAuthenticated || isTokenExpired) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  // If authenticated and the token is valid, render the protected component.
  return <>{children}</>;
};

export default ProtectedRoute;
