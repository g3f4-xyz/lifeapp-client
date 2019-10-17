import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Loader from './components/display/loader/Loader';
import './index.css';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from './environment';
import registerUserSubscription from './service-worker/registerUserSubscription';
import assetsServiceWorker from './service-worker/serviceWorkerManager';

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

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <RelayEnvironmentProvider environment={environment}>
      <HashRouter>
        <App />
      </HashRouter>
    </RelayEnvironmentProvider>
  </Suspense>,
  document.getElementById('root'),
);
