import { createContext } from 'react';
import { AuthProps, UserInfo } from '../components/login/useAuth';

const AuthContext = createContext<AuthProps>({
  userInfo: null,
  loading: true,

  setUserInfo(_userInfo: UserInfo) {
    return;
  },
});

export default AuthContext;
