import { getJSON as getCookie } from 'js-cookie';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/display/Loader';
import './index.css';
import assetsServiceWorker from './serviceWorkers/assetsServiceWorker';
import { registerUserSubscription } from './serviceWorkers/notificationsServiceWorker';

const App = React.lazy(() => import('./components/App'));
const Login = React.lazy(() => import('./components/Login'));

const logged: boolean = getCookie('logged');

ReactDOM.render(
  <Suspense fallback={<Loader/>}>
    {logged ? (
        <App />
      ) : (
        <Login />
    )}
  </Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
assetsServiceWorker.register({
  async onActivated(registration) {
    console.log(['assetsServiceWorker.onActivated.registration'], registration)
    await registerUserSubscription(registration);
  },
});
