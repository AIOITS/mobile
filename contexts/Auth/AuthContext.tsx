import React, { createContext, useContext, useReducer } from 'react';
import login from '../../api/rest/Auth/login';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import register from '../../api/rest/Auth/register';

interface State {
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  user: User | null;
  errorMessages: string;
  SignIn: ({
    email,
    password,
    phone,
  }: LoginInput) => Promise<RegisterSuccessResponse | ErrorResponse>;
  SignOut: () => void;
  Register: ({
    name,
    email,
    phone,
    nik,
    password,
  }: RegisterInput) => Promise<void | ErrorResponse>;
  CheckToken: () => Promise<User | null>;
  getToken: () => Promise<string | null>;
}

const initialAuthState: State = {
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  user: null,
  errorMessages: '',
  SignIn: login,
  SignOut: () => {},
  Register: async () => {},
  CheckToken: async () => null,
  getToken: async () => null,
};

interface User {
  id: number;
  role?: number;
  iat?: number;
  exp?: number;
  email?: string;
  phone?: string;
  password?: string;
  nik?: string;
}

enum AuthAction {
  SET_LOADING = 'SET_LOADING',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_ERROR = 'SIGN_IN_ERROR',
  SIGN_OUT = 'SIGN_OUT',
  REGISTER_IN_SUCCESS = 'REGISTER_IN_SUCCESS',
  REGISTER_IN_ERROR = 'REGISTER_IN_ERROR',
  SET_USER = 'SET_USER',
}

interface payload {
  user?: User;
  errorMsg?: string;
}

type action = {
  type: AuthAction;
  payload?: payload;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthReducer = (state: State, action: action): State => {
  switch (action.type) {
    case AuthAction.SET_LOADING:
      return { ...state, isLoading: true };
    case AuthAction.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isError: false,
        user: action.payload?.user || null,
      };
    case AuthAction.SIGN_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: true,
        errorMessages: action.payload?.errorMsg || '',
      };
    case AuthAction.SIGN_OUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: false,
        user: null,
      };
    case AuthAction.REGISTER_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: false,
        user: null,
      };
    case AuthAction.REGISTER_IN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        isError: true,
        errorMessages: action.payload?.errorMsg || '',
      };
    case AuthAction.SET_USER:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        isError: false,
        user: action.payload?.user || null,
      };
    default:
      return state;
  }
};

export const AuthContext = React.createContext<State>(initialAuthState);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useCameraContext must be used within a CameraProvider');
  }
  return context;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialAuthState);

  const SignIn = async ({
    email,
    password,
    phone,
  }: LoginInput): Promise<RegisterSuccessResponse | ErrorResponse> => {
    try {
      dispatch({ type: AuthAction.SET_LOADING });

      const user = await login({ email, password, phone });

      if ('statusCode' in user && user.statusCode !== 200) {
        console.log('error login');
        return user;
      }

      let token = null;
      if ('data' in user && user.statusCode === 200) {
        token = user.data.access_token;
      }

      if (token !== null) {
        const decoded_token = jwtDecode(token);
        dispatch({
          type: AuthAction.SIGN_IN_SUCCESS,
          payload: { user: decoded_token as User },
        });

        const user = JSON.stringify(decoded_token);
        await AsyncStorage.setItem('user', user);
        await AsyncStorage.setItem('token', token);
      }
      return user;
    } catch (error) {
      dispatch({
        type: AuthAction.SIGN_IN_ERROR,
        payload: { errorMsg: (error as Error).message },
      });
      throw error;
    }
  };

  const SignOut = async (): Promise<void> => {
    console.log('sign out');
    dispatch({ type: AuthAction.SET_LOADING });
    console.log(initialAuthState.isLoggedIn);
    await AsyncStorage.removeItem('user');
    dispatch({ type: AuthAction.SIGN_OUT });
  };

  const Register = async ({
    name,
    email,
    phone,
    password,
    nik,
  }: RegisterInput): Promise<void | ErrorResponse> => {
    try {
      dispatch({ type: AuthAction.SET_LOADING });

      const user = await register({ name, email, phone, password, nik });
      console.log(user);

      if ('statusCode' in user && user.statusCode !== 200) {
        console.log('error register');
        dispatch({
          type: AuthAction.REGISTER_IN_ERROR,
        });
        if ('message' in user) {
          return user;
        }
      }
      dispatch({ type: AuthAction.REGISTER_IN_SUCCESS });
    } catch (error) {
      dispatch({
        type: AuthAction.REGISTER_IN_ERROR,
        payload: { errorMsg: (error as Error).message },
      });
      throw error;
    }
  };

  const CheckToken = async (): Promise<User | null> => {
    const user_token = await AsyncStorage.getItem('user');
    // console.log(`user token: ${user_token}`);
    dispatch({
      type: AuthAction.SET_USER,
      payload: { user: user_token ? JSON.parse(user_token) : null },
    });
    return user_token as User | null;
  };

  const getToken = async (): Promise<string | null> => {
    const access_token = await AsyncStorage.getItem('token');
    return access_token;
  };

  return (
    <AuthContext.Provider
      value={{ ...state, SignIn, SignOut, Register, CheckToken, getToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
