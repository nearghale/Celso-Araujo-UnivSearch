import React, {createContext, useContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthContextData {
  signed: boolean;
  cleanState(): void;
  doLoginUser(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();

  async function cleanState() {
    await AsyncStorage.removeItem('@ListApp:userLogged');
    setIsAuthenticated(false);
  }

  function doLoginUser() {
    setIsAuthenticated(!isAuthenticated);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!isAuthenticated,
        cleanState,
        doLoginUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
