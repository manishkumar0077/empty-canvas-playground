import React, { createContext, useContext, ReactNode } from 'react';
import { useAuth as useSupabaseAuth } from '../hooks/useAuth';

interface AuthContextType {
  user: any;
  profile: any;
  loading: boolean;
  isAdmin: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const auth = useSupabaseAuth();

  // Legacy login function for backward compatibility
  const login = async (email: string, password: string): Promise<boolean> => {
    const { error } = await auth.signIn(email, password);
    return !error;
  };

  // Legacy logout function for backward compatibility
  const logout = async () => {
    await auth.signOut();
  };

  const value = {
    ...auth,
    login,
    logout,
    isAuthenticated: !!auth.user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};