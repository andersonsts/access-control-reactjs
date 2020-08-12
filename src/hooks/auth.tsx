import React, { createContext, useContext, useState, useCallback } from 'react';

interface User {
  id: string;
  name: string;
  username: string;
  avatar_url: string;
  roles: string[];
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  // signOut(): void;
  // updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Permission:token');
    const user = localStorage.getItem('@Permission:user');

    if(user && token) {
      // api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ username, password }) => {
    // const response = awa//

    // localStorage.setItem('@Permission:token', token);
    // localStorage.setItem('@Permission:user', JSON.stringfy(user));

    // api.defaults.headers.authorization = `Bearer ${token}`

    // setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    // localStorage.removeItem('@Permission:token');
    // localStorage.removeItem('@Permission:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
