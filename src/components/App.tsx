import React, { FC, useLayoutEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MODULES_IDS } from '../constans';
import registerUserSubscription from '../service-worker/registerUserSubscription';
import assetsServiceWorker from '../service-worker/serviceWorkerManager';
import ErrorBoundary from './containers/error-boundary/ErrorBoundary';
import ResponsiveGrid from './containers/responsive-grid/ResponsiveGrid';
import AppMenu from './display/app-menu/AppMenu';
import SettingsQuery from './modules/settings/SettingsQuery';
import TaskList from './modules/task-list/TaskList';
import TaskTypeList from './modules/task-type-list/TaskTypeList';
import Task from './modules/task/Task';

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

const App: FC = () => {
  useLayoutEffect(() => {
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
  });

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppMenu />
        <Switch>
          <Route path={`/${MODULES_IDS.TASK_LIST}`} component={TaskList} />
          <Route path={`/${MODULES_IDS.TASK_TYPE_LIST}`} component={TaskTypeList} />
          <Route path={`/${MODULES_IDS.TASK}/*`} component={Task} />
          <Route path={`/${MODULES_IDS.SETTINGS}`} component={SettingsQuery} />
          <Route
            path="/dashboard"
            component={() => (
              <ResponsiveGrid>
                <TaskList />
                <TaskTypeList />
                <SettingsQuery />
              </ResponsiveGrid>
            )}
          />
          <Route path="/">
            <Redirect to={MODULES_IDS.TASK_LIST} />
          </Route>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
