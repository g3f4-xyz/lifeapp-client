import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import ErrorBoundary from './containers/error-boundary/ErrorBoundary';
import useAuth from './login/useAuth';

const Application = React.lazy(() => import('./Application'));
const Login = React.lazy(() => import('./login/Login'));

const App: FC = () => {
  const auth = useAuth();

  return (
    <ErrorBoundary>
      <AuthContext.Provider value={auth}>
        <Route path="/login" component={Login} />
        <Route path="/app" component={Application} />
        <Route path="/*">
          <Redirect to="/login" />
        </Route>
      </AuthContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
