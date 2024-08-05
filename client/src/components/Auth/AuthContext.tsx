import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  tokenExpiration: number | null; // Add this line
  login: (token: string, expiresAt: number) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('token'));
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(parseInt(localStorage.getItem('tokenExpiration') || '0', 10)); // Initialize tokenExpiration

  const login = (token: string, expiresAt: number) => {
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expiresAt.toString());
    setToken(token);
    setTokenExpiration(expiresAt);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    setToken(null);
    setTokenExpiration(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, tokenExpiration, login, logout }}>
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



