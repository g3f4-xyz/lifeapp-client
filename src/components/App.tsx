import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import ErrorBoundary from './containers/error-boundary/ErrorBoundary';
import RelayEnvironmentContext from '../contexts/RelayEnvironmentContext';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from './display/loader/Loader';
import createRelayEnvironment from '../createRelayEnvironment';

const Application = React.lazy(() => import('./Application'));
const Login = React.lazy(() => import('./login/Login'));

export default function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return <AppContent />;
}

function AppContent() {
  const [token, setToken] = useState('unauthorised');
  const { getAccessTokenSilently } = useAuth0();
  useEffect(() => {
    getAccessTokenSilently().then((accessToken) => {
      setToken(accessToken);
    });
  });

  return (
    <ErrorBoundary>
      <RelayEnvironmentContext.Provider value={createRelayEnvironment(token)}>
        <Route path="/login" component={Login} />
        <Route path="/app" component={Application} />
        <Route path="/*">
          <Redirect to="/login" />
        </Route>
      </RelayEnvironmentContext.Provider>
    </ErrorBoundary>
  );
}
