import { getJSON as getCookie } from 'js-cookie';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/display/loader/Loader';
import './index.css';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from './environment';

const App = React.lazy(() => import('./components/App'));
const Login = React.lazy(() => import('./components/login/Login'));

const logged: boolean = getCookie('logged');

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    {logged ? (
      <RelayEnvironmentProvider environment={environment}>
        <App />
      </RelayEnvironmentProvider>
    ) : (
      <Login />
    )}
  </Suspense>,
  document.getElementById('root'),
);
