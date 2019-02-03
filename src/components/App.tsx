import { IconButton, withStyles } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import immutabilityHelper from 'immutability-helper';
import React from 'react';
import { Component, Fragment } from 'react';
import { QueryRenderer } from 'react-relay';
import ErrorBoundary from './containers/ErrorBoundary';
import ResponsiveGrid from './containers/ResponsiveGrid';
import AppMenu from './display/AppMenu';
import Loader from './display/Loader';
import settingsHandler from './modules/Settings/settingsHandler';
import SettingsQuery from './modules/Settings/SettingsQuery';
import taskHandler from './modules/Task/taskHandler';
import TaskQuery from './modules/Task/TaskQuery';
import taskListHandler from './modules/TaskList/taskListHandler';
import TaskListQuery from './modules/TaskList/TaskListQuery';
import taskTypeListHandler from './modules/TaskTypeList/taskTypeListHandler';
import TaskTypeListQuery from './modules/TaskTypeList/TaskTypeListQuery';
import { LOCAL_STORAGE_LAYOUTS_KEY, MODULES_IDS } from '../constans';
import environment from '../environment';
import { getFromLS, saveToLS } from '../utils/rglLocalStore';

const styles = {
  backButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    left: 20,
    height: 72,
    width: 72,
  },
  backButtonIcon: {
    fontSize: 72,
  },
  menuContainer: {
    position: 'absolute',
    right: 10,
    zIndex: 9,
  },
};

const QUERIES_COMPONENTS = {
  [MODULES_IDS.SETTINGS]: SettingsQuery,
  [MODULES_IDS.TASK]: TaskQuery,
  [MODULES_IDS.TASK_LIST]: TaskListQuery,
  [MODULES_IDS.TASK_TYPE_LIST]: TaskTypeListQuery,
};
const APP_MODULES_IDS = [
  MODULES_IDS.SETTINGS,
  MODULES_IDS.TASK_LIST,
  MODULES_IDS.TASK_TYPE_LIST,
];

interface Props {
  classes?: any;
}

interface State {
  activeModuleId: any;
  activeModulesHistory: any;
  appOpenedModuleIds: any;
  openedTasksModulesProps: any;
  layouts: any;
  gridView: any;
  gridViewLocked: any;
}

class App extends Component<Props, State> {
  state = {
    activeModuleId: MODULES_IDS.TASK_LIST,
    activeModulesHistory: [MODULES_IDS.TASK_LIST],
    appOpenedModuleIds: [MODULES_IDS.TASK_LIST],
    openedTasksModulesProps: [],
    layouts: getFromLS(LOCAL_STORAGE_LAYOUTS_KEY) || {},
    gridView: false,
    gridViewLocked: false,
  };

  handlers = {
    [MODULES_IDS.SETTINGS]: settingsHandler,
    [MODULES_IDS.TASK]: taskHandler,
    [MODULES_IDS.TASK_LIST]: taskListHandler,
    [MODULES_IDS.TASK_TYPE_LIST]: taskTypeListHandler,
  };

  moduleHandler(handlerName: any, moduleProps: any, data: any): any {
    const handler = this.handlers[handlerName];
    const updateState = (spec: any): any => this.setState(immutabilityHelper(this.state, spec));

    if (handler) {
      return handler(moduleProps, data, this.state, updateState);
    }

    console.error(`No module handler provider for module ${moduleProps.moduleId}`);
  }

  onModuleZoom = (activeModuleId: any): any => {
    const { appOpenedModuleIds } = this.state;
    const isApplicationModule = APP_MODULES_IDS.includes(activeModuleId);
    const setAppOpenedModuleIds = () => {
      return appOpenedModuleIds.includes(activeModuleId)
        ? appOpenedModuleIds
        : [...appOpenedModuleIds, activeModuleId];
    };

    this.setState({
      activeModuleId,
      activeModulesHistory: [MODULES_IDS.TASK_LIST, activeModuleId],
      gridView: false,
      appOpenedModuleIds: isApplicationModule
        ? setAppOpenedModuleIds()
        : appOpenedModuleIds,
    });
  };

  onModuleClose = (moduleId: any): any => {
    if (moduleId !== MODULES_IDS.TASK_LIST) {
      const { appOpenedModuleIds, openedTasksModulesProps } = this.state;

      if (APP_MODULES_IDS.includes(moduleId)) {
        this.setState({
          appOpenedModuleIds: appOpenedModuleIds.filter((id: any): any => id !== moduleId),
        });
      } else {
        this.setState({
          openedTasksModulesProps: openedTasksModulesProps.filter((props: any): any => props.moduleId !== moduleId),
        });
      }
    }
  };

  onActiveModuleBack = (): any => {
    const { activeModuleId, activeModulesHistory, appOpenedModuleIds, openedTasksModulesProps } = this.state;
    const isApplicationModule = APP_MODULES_IDS.includes(activeModuleId);

    if (isApplicationModule) {
      this.setState({
        activeModuleId: activeModulesHistory[activeModulesHistory.length - 1],
        activeModulesHistory: activeModulesHistory.filter((moduleId: any): any => moduleId !== activeModuleId),
        appOpenedModuleIds: appOpenedModuleIds.filter((id: any): any => id !== activeModuleId),
      });
    } else {
      this.setState({
        activeModuleId: activeModulesHistory[activeModulesHistory.length - 2],
        activeModulesHistory: activeModulesHistory.filter((moduleId: any): any => moduleId !== activeModuleId),
        openedTasksModulesProps: openedTasksModulesProps.filter((props: any): any => props.moduleId !== activeModuleId),
      });
    }
  };

  onShowSettings = (): any => {
    this.setState({ activeModuleId: MODULES_IDS.SETTINGS });
  };

  onResetGrid = (): any => {
    this.setState({ layouts: {} });
  };

  onLayoutChange = (layout: any, layouts: any): any => {
    saveToLS(LOCAL_STORAGE_LAYOUTS_KEY, layouts);
    this.setState({ layouts });
  };

  onToggleGridView = (): any => {
    this.setState({ gridView: !this.state.gridView });
  };

  onToggleGridViewLocked = (): any => {
    this.setState({
      gridView: !this.state.gridViewLocked,
      gridViewLocked: !this.state.gridViewLocked,
    });
  };

  renderMenu(): any {
    const { gridView, gridViewLocked } = this.state;

    return (
      <div className={this.props.classes.menuContainer}>
        <AppMenu
          options={[{
            label: 'Log out',
            action: () => window.location.replace('logout'),
          }, {
            label: gridView ? 'Hide grid' : 'Show grid',
            action: this.onToggleGridView,
          },  {
            label: gridViewLocked ? 'Unlock grid' : 'Lock grid',
            action: this.onToggleGridViewLocked,
          }, {
            label: 'Reset grid',
            action: this.onResetGrid,
            visible: gridView,
          }, {
            label: 'Show settings',
            action: this.onShowSettings,
          }]}
        />
      </div>
    );
  }

  renderTaskModule(moduleProps: any, data: any): any {
    return (
      <TaskQuery key={moduleProps.moduleId} { ...this.moduleHandler(MODULES_IDS.TASK, moduleProps, data) } />
    );
  }

  renderTaskModules(data: any): any {
    return this.state.openedTasksModulesProps.map(module => this.renderTaskModule(module, data));
  }

  renderApplicationModule(moduleId: any, data: any) {
    const Component = QUERIES_COMPONENTS[moduleId];

    return (
      <Component
        key={moduleId}
        moduleId={moduleId}
        {...this.moduleHandler(moduleId, { moduleId }, data)}
      />
    );
  }

  renderApplicationModules(data: any): any {
    return this.state.appOpenedModuleIds.map((moduleId: any): any =>
      this.renderApplicationModule(moduleId, data.app[moduleId]));
  }

  renderResponsiveGrid(data: any): any {
    const { layouts } = this.state;

    return (
      <ResponsiveGrid
        layouts={layouts}
        onModuleClose={this.onModuleClose}
        onModuleZoom={this.onModuleZoom}
        onLayoutChange={this.onLayoutChange}
      >
        {this.renderApplicationModules(data)}
        {this.renderTaskModules(data)}
      </ResponsiveGrid>
    );
  }

  renderModule(data: any): any {
    const { activeModuleId } = this.state;
    const isApplicationModule = APP_MODULES_IDS.includes(activeModuleId);

    if (isApplicationModule) {
      return this.renderApplicationModule(activeModuleId, data);
    }

    const taskModuleProps = this.state.openedTasksModulesProps.find(({ moduleId }) => activeModuleId === moduleId);

    if (!taskModuleProps) {
      console.error(`No moduleProps for module "${activeModuleId}"`);
    }

    return this.renderTaskModule(taskModuleProps, data);
  }

  renderApplication(data: any): any {
    const { classes } = this.props;
    const { activeModuleId, gridView } = this.state;
    const isTaskListModuleActive = MODULES_IDS.TASK_LIST === activeModuleId;

    return (
      <Fragment>
        {this.renderMenu()}
        {this.state.gridView ? this.renderResponsiveGrid(data) : this.renderModule(data)}
        {!(isTaskListModuleActive || gridView) && (
          <IconButton
            className={classes.backButton}
            color="secondary"
            onClick={this.onActiveModuleBack}
          >
            <Cancel className={classes.backButtonIcon} />
          </IconButton>
        )}
      </Fragment>
    );
  }

  render() {
    return (
      <ErrorBoundary>
        <QueryRenderer
          environment={environment}
          variables={{}}
          query={graphql`
            query AppQuery {
              app {
                taskList {
                  id
                }
                taskTypeList {
                  id
                }
              }
            }
          `}
          render={({error, props}) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
            } else if (props) {
              return this.renderApplication(props);
            }
            return (
              <Loader />
            );
          }}
        />
      </ErrorBoundary>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(App);
