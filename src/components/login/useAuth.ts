import { useEffect, useState } from 'react';

// eslint-disable-next-line no-undef
const API_HOST = process.env.REACT_APP_API_HOST || '';

export interface UserInfo {
  name: string;
  photo: string;
}

export interface AuthProps {
  userInfo: UserInfo | null;
  loading: boolean;

  setUserInfo(_userInfo: UserInfo): void;
}

export interface UseAuth {
  (): AuthProps;
}

const useAuth: UseAuth = () => {
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const response = await fetch(`${API_HOST}/wake-up`, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        headers: { 'Access-Control-Allow-Credentials': true },
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        credentials: 'include',
      });
      const userInfo = await response.json();

      setLoading(false);
      setUserInfo(userInfo);
    };

    if (loading) {
      fetchUserInfo();
    }
  }, [loading, setLoading, setUserInfo]);

  return {
    userInfo,
    setUserInfo,
    loading,
  };
};

export default useAuth;
