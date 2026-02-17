import React, { createContext, useState, ReactNode } from "react";

export interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (email: string, password: string) => boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  register: () => false,
  logout: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {

  const [user, setUser] = useState<User | null>(null);

  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const register = (email: string, password: string) => {

    const exists = registeredUsers.find(u => u.email === email);

    if (exists) {
      alert("User already exists");
      return false;
    }

    const newUser = { email, password };

    setRegisteredUsers([...registeredUsers, newUser]);

    alert("Registered successfully");

    return true;
  };

  const login = (email: string, password: string) => {

    const found = registeredUsers.find(
      u => u.email === email && u.password === password
    );

    if (!found) {
      alert("Invalid email or password");
      return false;
    }

    setUser(found);

    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
