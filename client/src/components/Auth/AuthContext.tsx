// import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// interface AuthContextType {
//   isAuthenticated: boolean;
//   token: string | null;
//   tokenExpiration: number | null; // Add this line
//   login: (token: string, expiresAt: number) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// // export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
// //   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('token'));
// //   const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
// //   const [tokenExpiration, setTokenExpiration] = useState<number | null>(parseInt(localStorage.getItem('tokenExpiration') || '0', 10)); // Initialize tokenExpiration

// export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [token, setToken] = useState<string | null>(null);
//   const [tokenExpiration, setTokenExpiration] = useState<number | null>(null);


//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     const storedTokenExpiration = localStorage.getItem('tokenExpiration');
//     if (storedToken && storedTokenExpiration) {
//       const expirationTime = parseInt(storedTokenExpiration, 10);
//       const currentTime = Date.now();

//       if (currentTime < expirationTime) {
//         setIsAuthenticated(true);
//         setToken(storedToken);
//         setTokenExpiration(expirationTime);
//       } else {
//         // Token expired, clear storage
//         localStorage.removeItem('token');
//         localStorage.removeItem('tokenExpiration');
//       }
//     }
//   }, []);

//   const login = (token: string, expiresAt: number) => {
//     localStorage.setItem('token', token);
//     localStorage.setItem('tokenExpiration', expiresAt.toString());
//     setToken(token);
//     setTokenExpiration(expiresAt);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('tokenExpiration');
//     setToken(null);
//     setTokenExpiration(null);
//     setIsAuthenticated(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, token, tokenExpiration, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };




import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  tokenExpiration: number | null;
  login: (token: string, expiresAt: number) => void;
  // logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>(null);
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedTokenExpiration = localStorage.getItem('tokenExpiration');
    if (storedToken && storedTokenExpiration) {
      const expirationTime = parseInt(storedTokenExpiration, 10);
      const currentTime = Date.now();

      if (currentTime < expirationTime) {
        setIsAuthenticated(true);
        setToken(storedToken);
        setTokenExpiration(expirationTime);
      } else {
        // Token expired, clear storage
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
      }
    }
  }, []);

  const login = (token: string, expiresAt: number) => {
    const expirationTime = Date.now() + expiresAt 
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString());
    setToken(token);
    setTokenExpiration(expirationTime);
    setIsAuthenticated(true);
  };

  // const logout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('tokenExpiration');
  //   setToken(null);
  //   setTokenExpiration(null);
  //   setIsAuthenticated(false);
  // };

  // useEffect(() => {
  //   if (tokenExpiration) {
  //     const remainingTime = tokenExpiration - Date.now();
  //     const timer = setTimeout(() => {
  //       logout();
  //       navigate('/login');
  //     }, remainingTime);

  //     return () => clearTimeout(timer); // Clear timeout if component unmounts
  //   }
  // }, [tokenExpiration, logout, navigate]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, tokenExpiration, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



