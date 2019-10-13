import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MODULES_IDS } from '../constans';
import registerUserSubscription from '../service-worker/registerUserSubscription';
import assetsServiceWorker from '../service-worker/serviceWorkerManager';
import AppContext, { TaskParams } from './AppContext';
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
  const [openedTasksParams, setOpenedTasksParams] = useState<TaskParams[]>([]);

  const addTaskParam = useCallback(
    (taskParams: TaskParams) => {
      const duplicate =
        openedTasksParams.findIndex(({ taskId }) => taskId === taskParams.taskId) >= 0;

      if (!duplicate) {
        setOpenedTasksParams(prev => [...prev, taskParams]);
      }
    },
    [openedTasksParams, setOpenedTasksParams],
  );
  const removeTaskParam = useCallback(
    (taskParams: TaskParams) => {
      setOpenedTasksParams(prev => prev.filter(params => params.taskId === taskParams.taskId));
    },
    [setOpenedTasksParams],
  );
  const removeGridNode = useCallback(
    (moduleId: string) => {
      setOpenedTasksParams(prev =>
        prev.filter(params => params.taskId === moduleId || params.taskType === moduleId),
      );
    },
    [setOpenedTasksParams],
  );

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
      <AppContext.Provider value={{ value: { openedTasksParams }, addTaskParam, removeTaskParam }}>
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
                <ResponsiveGrid onRemove={removeGridNode}>
                  <TaskList path={`${MODULES_IDS.TASK_LIST}`} />
                  <TaskTypeList path={`${MODULES_IDS.TASK_TYPE_LIST}`} />
                  <SettingsQuery path={`${MODULES_IDS.SETTINGS}`} />
                  {openedTasksParams.map(params => (
                    <Task
                      key={params.taskId || params.taskType}
                      path={`${params.taskId}/${params.taskType}`}
                      {...params}
                    />
                  ))}
                </ResponsiveGrid>
              )}
            />
            <Route path="/">
              <Redirect to={MODULES_IDS.TASK_LIST} />
            </Route>
          </Switch>
        </BrowserRouter>
      </AppContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
