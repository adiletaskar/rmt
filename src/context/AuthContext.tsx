import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Router from 'next/router';

type AuthProviderContext = {
  children: ReactNode;
};

type Login = {
  login: string;
  password: string;
};

type AuthContext = {
  Auth: (isAuth?: string | null, login?: Login) => void;
  isAuth: boolean;
};

type LoginLocal = {
  address?: string;
  login?: string;
  password?: string;
};

const AuthContext = createContext({} as AuthContext);

export const UseShoppingCart = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderContext) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loginLocal, setLoginLocal] = useLocalStorage<LoginLocal>('login', {
    address: '',
    login: '',
    password: '',
  });

  useEffect(() => {
    if (isAuth) {
      Router.push('/');
    }
  }, [isAuth]);

  const Auth = (authAddress?: string | null, login?: Login) => {
    if (authAddress) {
      // Check if the user has authenticated with MetaMask, and set isAuth to true
      setIsAuth(true);
      setLoginLocal({ address: authAddress });
    }

    if (login?.login === 'Nimbl123!@#' && login?.password === 'qwerty123*()') {
      // Check if the user provided a login and password for authentication
      setIsAuth(true);
      setLoginLocal({ login: login.login, password: login.password });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        Auth,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
