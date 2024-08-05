



// // ProtectedRoute.tsx
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../Auth/AuthContext'; // Adjust path as needed

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   const location = useLocation();

//   if (!isAuthenticated) {
//     // Redirect them to the /login page if not logged in
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;


// ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext'; // Adjust path as needed

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, tokenExpiration } = useAuth();
  const location = useLocation();

  const currentTime = Date.now();
  const isTokenExpired = tokenExpiration ? currentTime > tokenExpiration : true;

  if (!isAuthenticated || isTokenExpired) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;

