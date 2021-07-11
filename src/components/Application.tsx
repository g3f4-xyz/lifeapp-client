import React, { FC, useCallback, useContext, useState } from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { RelayEnvironmentProvider } from "relay-hooks";
import { MODULES_IDS } from "../constans";
import createRelayEnvironment from "../createRelayEnvironment";
import AppContext, { TaskParams } from "./AppContext";
import Auth0TokenContext from "./Auth0TokenContext";
import ErrorBoundary from "./containers/error-boundary/ErrorBoundary";
import ResponsiveGrid, { ResponsiveGridItem } from "./containers/responsive-grid/ResponsiveGrid";
import AppMenu from "./display/app-menu/AppMenu";
import SettingsQuery from "./modules/settings/SettingsQuery";
import TaskList from "./modules/task-list/TaskList";
import TaskTypeList from "./modules/task-type-list/TaskTypeList";
import Task from "./modules/task/Task";

const Application: FC = () => {
  const [openedTasksParams, setOpenedTasksParams] = useState<TaskParams[]>([]);
  const match = useRouteMatch() || {
    params: '',
    isExact: false,
    path: '',
    url: '',
  };
  const token = useContext(Auth0TokenContext)
  const environment = createRelayEnvironment(token);

  const addTaskParam = useCallback(
    (taskParams: TaskParams) => {
      const duplicate =
        openedTasksParams.findIndex(({ taskId }) => taskId === taskParams.taskId) >= 0;

      if (!duplicate) {
        setOpenedTasksParams((prev) => [...prev, taskParams]);
      }
    },
    [openedTasksParams, setOpenedTasksParams],
  );
  const removeTaskParam = useCallback(
    (taskParams: TaskParams) => {
      setOpenedTasksParams((prev) => prev.filter((params) => params.taskId === taskParams.taskId));
    },
    [setOpenedTasksParams],
  );
  const removeGridItem = (path: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_hash, firstPart, secondPart, thirdPart] = path.split('/');

    if (firstPart === 'task') {
      const filtered = openedTasksParams.filter(
        (params) => !(params.taskId === thirdPart && params.taskType === secondPart),
      );

      setOpenedTasksParams(filtered);
    }
  };

  return (
    <ErrorBoundary>
      <RelayEnvironmentProvider environment={environment}>
        <AppContext.Provider
          value={{ value: { openedTasksParams }, addTaskParam, removeTaskParam }}
        >
          <AppMenu />
          <Switch>
            <Route path={`${match.url}/${MODULES_IDS.TASK_LIST}`.toString()} component={TaskList} />
            <Route
              path={`${match.url}/${MODULES_IDS.TASK_TYPE_LIST}`.toString()}
              component={TaskTypeList}
            />
            <Route
              path={`${match.url}/${MODULES_IDS.SETTINGS}`.toString()}
              component={SettingsQuery}
            />
            <Route path={`${match.url}/${MODULES_IDS.TASK}/*`.toString()} component={Task} />
            <Route
              path={`${match.url}/dashboard`}
              component={() => (
                <ResponsiveGrid>
                  <ResponsiveGridItem
                    path={`${match.url}/${MODULES_IDS.TASK_LIST}`}
                    onRemove={removeGridItem}
                    fixed
                  >
                    <TaskList />
                  </ResponsiveGridItem>
                  <ResponsiveGridItem
                    path={`${match.url}/${MODULES_IDS.TASK_TYPE_LIST}`}
                    onRemove={removeGridItem}
                    fixed
                  >
                    <TaskTypeList />
                  </ResponsiveGridItem>
                  <ResponsiveGridItem
                    path={`${match.url}/${MODULES_IDS.SETTINGS}`}
                    onRemove={removeGridItem}
                    fixed
                  >
                    <SettingsQuery />
                  </ResponsiveGridItem>
                  {openedTasksParams.map((params) => (
                    <ResponsiveGridItem
                      key={params.taskId || params.taskType}
                      path={`${match.url}/task/${params.taskType}/${params.taskId}`}
                      onRemove={removeGridItem}
                    >
                      <Task {...params} />
                    </ResponsiveGridItem>
                  ))}
                </ResponsiveGrid>
              )}
            />
            <Route path="/*">
              <Redirect to={`${match.url}/${MODULES_IDS.TASK_LIST}`} />
            </Route>
          </Switch>
        </AppContext.Provider>
      </RelayEnvironmentProvider>
    </ErrorBoundary>
  );
};

export default Application;
