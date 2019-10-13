import React, { FC, useCallback, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { MODULES_IDS } from '../constans';
import AppContext, { TaskParams } from './AppContext';
import ErrorBoundary from './containers/error-boundary/ErrorBoundary';
import ResponsiveGrid, { ResponsiveGridItem } from './containers/responsive-grid/ResponsiveGrid';
import AppMenu from './display/app-menu/AppMenu';
import SettingsQuery from './modules/settings/SettingsQuery';
import TaskList from './modules/task-list/TaskList';
import TaskTypeList from './modules/task-type-list/TaskTypeList';
import Task from './modules/task/Task';

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
  const removeGridItem = (path: string) => {
    const [firstPart, secondPart, thirdPart] = path.split('/');

    if (firstPart === 'task') {
      const filtered = openedTasksParams.filter(
        params => !(params.taskId === thirdPart && params.taskType === secondPart),
      );

      setOpenedTasksParams(filtered);
    }
  };

  return (
    <ErrorBoundary>
      <AppContext.Provider value={{ value: { openedTasksParams }, addTaskParam, removeTaskParam }}>
        <BrowserRouter>
          <AppMenu />
          <Switch>
            <Route path={`/${MODULES_IDS.TASK_LIST}`} component={TaskList} />
            <Route path={`/${MODULES_IDS.TASK_TYPE_LIST}`} component={TaskTypeList} />
            <Route path={`/${MODULES_IDS.SETTINGS}`} component={SettingsQuery} />
            <Route path={`/${MODULES_IDS.TASK}/*`} component={Task} />
            <Route
              path="/dashboard"
              component={() => (
                <ResponsiveGrid>
                  <ResponsiveGridItem
                    path={`${MODULES_IDS.TASK_LIST}`}
                    onRemove={removeGridItem}
                    fixed
                  >
                    <TaskList />
                  </ResponsiveGridItem>
                  <ResponsiveGridItem
                    path={`${MODULES_IDS.TASK_TYPE_LIST}`}
                    onRemove={removeGridItem}
                    fixed
                  >
                    <TaskTypeList />
                  </ResponsiveGridItem>
                  <ResponsiveGridItem
                    path={`${MODULES_IDS.SETTINGS}`}
                    onRemove={removeGridItem}
                    fixed
                  >
                    <SettingsQuery />
                  </ResponsiveGridItem>
                  {openedTasksParams.map(params => (
                    <ResponsiveGridItem
                      key={params.taskId || params.taskType}
                      path={`task/${params.taskType}/${params.taskId}`}
                      onRemove={removeGridItem}
                    >
                      <Task {...params} />
                    </ResponsiveGridItem>
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
