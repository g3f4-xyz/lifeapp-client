import { IconButton, withStyles } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import immutabilityHelper, { Spec } from 'immutability-helper';
import React, { Fragment } from 'react';
import { Layout, Layouts } from 'react-grid-layout';
import { LOCAL_STORAGE_LAYOUTS_KEY, MODULE, MODULES_IDS } from '../constans';
import { getFromLS, saveToLS } from '../utils/rglLocalStore';
import ErrorBoundary from './containers/ErrorBoundary';
import ResponsiveGrid from './containers/ResponsiveGrid';
import AppMenu from './display/AppMenu';
import settingsHandler from './modules/Settings/settingsHandler';
import SettingsQuery from './modules/Settings/SettingsQuery';
import taskHandler from './modules/Task/taskHandler';
import TaskQuery from './modules/Task/TaskQuery';
import taskListHandler from './modules/TaskList/taskListHandler';
import TaskListQuery from './modules/TaskList/TaskListQuery';
import taskTypeListHandler from './modules/TaskTypeList/taskTypeListHandler';
import TaskTypeListQuery from './modules/TaskTypeList/TaskTypeListQuery';

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

export interface ModuleProps {
  moduleId: string;
}

interface Props {
  classes?: any;
}

export interface AppState {
  activeModuleId: string;
  activeModulesHistory: string[];
  appOpenedModuleIds: MODULE[];
  openedTasksModulesProps: ModuleProps[];
  layouts: Layouts;
  gridView: boolean;
  gridViewLocked: boolean;
}

class App extends React.Component<Props, AppState> {
  state = {
    activeModuleId: MODULES_IDS.TASK_LIST,
    activeModulesHistory: [MODULES_IDS.TASK_LIST],
    appOpenedModuleIds: [MODULES_IDS.TASK_LIST],
    openedTasksModulesProps: [],
    layouts: getFromLS(LOCAL_STORAGE_LAYOUTS_KEY) || {},
    gridView: false,
    gridViewLocked: false,
  };

  private handlers = {
    [MODULES_IDS.SETTINGS]: settingsHandler,
    [MODULES_IDS.TASK]: taskHandler,
    [MODULES_IDS.TASK_LIST]: taskListHandler,
    [MODULES_IDS.TASK_TYPE_LIST]: taskTypeListHandler,
  };

  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        {this.renderApplication()}
      </ErrorBoundary>
    );
  }

  private renderApplication(): React.ReactNode {
    const { classes } = this.props;
    const { activeModuleId, gridView } = this.state;
    const isTaskListModuleActive = MODULES_IDS.TASK_LIST === activeModuleId;

    return (
      <Fragment>
        {this.renderMenu()}
        {this.state.gridView ? this.renderResponsiveGrid() : this.renderModule()}
        {!(isTaskListModuleActive || gridView) && (
          <IconButton
            className={classes.backButton}
            color="secondary"
            onClick={this.onActiveModuleBack}
          >
            <Cancel className={classes.backButtonIcon}/>
          </IconButton>
        )}
      </Fragment>
    );
  }

  private updateState = (spec: Spec<AppState>): void => this.setState(immutabilityHelper(this.state, spec));

  private moduleHandler(moduleId: MODULE, moduleProps: ModuleProps): any {
    const handler = this.handlers[moduleId];

    if (handler) {
      return handler(moduleProps, this.state, this.updateState);
    }

    throw new Error(`No module handler provider for module ${moduleProps.moduleId}`);
  }

  private renderMenu(): React.ReactNode {
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
          }, {
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

  private onModuleZoom = (activeModuleId: MODULE): void => {
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

  private onModuleClose = (moduleId: MODULE | string): void => {
    if (moduleId !== MODULES_IDS.TASK_LIST) {
      const { appOpenedModuleIds, openedTasksModulesProps } = this.state;

      if (APP_MODULES_IDS.includes(moduleId as MODULE)) {
        this.setState({
          appOpenedModuleIds: appOpenedModuleIds.filter((id: MODULE) => id !== moduleId),
        });
      } else {
        this.setState({
          openedTasksModulesProps: openedTasksModulesProps
            .filter((props: ModuleProps): boolean => props.moduleId !== moduleId),
        });
      }
    }
  };

  private onActiveModuleBack = (): void => {
    const { activeModuleId, activeModulesHistory, appOpenedModuleIds, openedTasksModulesProps } = this.state;
    const isApplicationModule = APP_MODULES_IDS.includes(activeModuleId);

    if (isApplicationModule) {
      this.setState({
        activeModuleId: activeModulesHistory[activeModulesHistory.length - 1],
        activeModulesHistory: activeModulesHistory.filter((moduleId) => moduleId !== activeModuleId),
        appOpenedModuleIds: appOpenedModuleIds.filter((id) => id !== activeModuleId),
      });
    } else {
      this.setState({
        activeModuleId: activeModulesHistory[activeModulesHistory.length - 2],
        activeModulesHistory: activeModulesHistory.filter((moduleId): any => moduleId !== activeModuleId),
        openedTasksModulesProps: openedTasksModulesProps.filter((props: any): any => props.moduleId !== activeModuleId),
      });
    }
  };

  private onShowSettings = (): void => {
    this.setState({ activeModuleId: MODULES_IDS.SETTINGS });
  };

  private onResetGrid = (): void => {
    this.setState({ layouts: {} });
  };

  private onLayoutChange = (layout: Layout, layouts: Layouts): void => {
    saveToLS(LOCAL_STORAGE_LAYOUTS_KEY, layouts);
    this.setState({ layouts });
  };

  private onToggleGridView = (): void => {
    this.setState({ gridView: !this.state.gridView });
  };

  private onToggleGridViewLocked = (): void => {
    this.setState({
      gridView: !this.state.gridViewLocked,
      gridViewLocked: !this.state.gridViewLocked,
    });
  };


  private renderTaskModule(moduleProps: ModuleProps): React.ReactNode {
    return (
      <TaskQuery key={moduleProps.moduleId} {...this.moduleHandler(MODULES_IDS.TASK, moduleProps)} />
    );
  }

  private renderTaskModules(): React.ReactNode {
    return this.state.openedTasksModulesProps.map((module: ModuleProps) => this.renderTaskModule(module));
  }

  private renderApplicationModule(moduleId: MODULE): React.ReactNode {
    const Component = QUERIES_COMPONENTS[moduleId];

    return (
      <Component
        key={moduleId}
        moduleId={moduleId}
        {...this.moduleHandler(moduleId, { moduleId })}
      />
    );
  }

  private renderApplicationModules(): React.ReactNode {
    return this.state.appOpenedModuleIds.map((moduleId) =>
      this.renderApplicationModule(moduleId));
  }

  private renderResponsiveGrid(): React.ReactNode {
    const { layouts } = this.state;

    return (
      <ResponsiveGrid
        layouts={layouts}
        onModuleClose={this.onModuleClose}
        onModuleZoom={this.onModuleZoom}
        onLayoutChange={this.onLayoutChange}
      >
        {this.renderApplicationModules()}
        {this.renderTaskModules()}
      </ResponsiveGrid>
    );
  }

  private renderModule(): React.ReactNode {
    const { activeModuleId } = this.state;
    const isApplicationModule = APP_MODULES_IDS.includes(activeModuleId);

    if (isApplicationModule) {
      return this.renderApplicationModule(activeModuleId);
    }

    const taskModuleProps = this.state.openedTasksModulesProps.find(({ moduleId }) => activeModuleId === moduleId);

    if (!taskModuleProps) {
      throw new Error(`No moduleProps for module "${activeModuleId}"`);
    }

    return this.renderTaskModule(taskModuleProps);
  }

}

// @ts-ignore
export default withStyles(styles)(App);
