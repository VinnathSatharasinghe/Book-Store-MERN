// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../Auth/AuthContext'; // Adjust path as needed

// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const { isAuthenticated, tokenExpiration } = useAuth();
//   const location = useLocation();

  
//   const currentTime = Date.now();
//   const isTokenExpired = tokenExpiration ? currentTime > tokenExpiration : true;

//   if (!isAuthenticated || isTokenExpired) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext'; // Adjust path as needed

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, tokenExpiration } = useAuth();
  const location = useLocation();

  const currentTime = Date.now();
  const isTokenExpired = tokenExpiration ? currentTime > tokenExpiration : true;

  if (isAuthenticated === undefined) {
    return <div>Loading...</div>; // Add a loading state if needed
  }

  if (!isAuthenticated || isTokenExpired) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;


