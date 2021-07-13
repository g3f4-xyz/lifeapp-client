import { createContext } from 'react';

const Auth0TokenContext = createContext<string>('unauthorised');

export default Auth0TokenContext;
