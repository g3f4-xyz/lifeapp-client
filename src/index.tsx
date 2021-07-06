import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Loader from './components/display/loader/Loader';
import { Auth0Provider, AppState } from '@auth0/auth0-react';
import './index.css';
import history from './utils/history';
import registerUserSubscription from './service-worker/registerUserSubscription';
import assetsServiceWorker from './service-worker/serviceWorkerManager';
import { getConfig } from './config';

const App = React.lazy(() => import('./components/App'));

assetsServiceWorker.register({
  onUpdate(registration) {
    console.info(['assetsServiceWorker.register.onUpdate'], registration);
  },
  onActivated(registration) {
    console.info(['assetsServiceWorker.register.onActivated'], registration);
  },
  onSuccess(registration) {
    console.info(['assetsServiceWorker.register.onSuccess'], registration);
  },
});

try {
  if (Notification.permission === 'granted') {
    setTimeout(async () => {
      const registration = await navigator.serviceWorker.ready;
      console.info(['navigator.serviceWorker.ready'], registration);
      await registerUserSubscription(registration, { silent: true });
    }, 3000);
  }
} catch (e) {
  console.error(`error trying to send user subscription | ${e}`);
}

const onRedirectCallback = (appState: AppState) => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname);
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  onRedirectCallback,
};

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <Auth0Provider {...providerConfig}>
      <HashRouter>
        <App />
      </HashRouter>
    </Auth0Provider>
  </Suspense>,
  document.getElementById('root'),
);
