import { IconButton, StyledComponentProps, withStyles } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import immutabilityHelper, { Spec } from 'immutability-helper';
import React, { Fragment } from 'react';
import { Layout, Layouts } from 'react-grid-layout';
import { LOCAL_STORAGE_LAYOUTS_KEY, MODULE, MODULES_IDS } from '../constans';
import registerUserSubscription from '../serviceWorker/registerUserSubscription';
import assetsServiceWorker from '../serviceWorker/serviceWorkerManager';
import { getFromLS, saveToLS } from '../utils/rglLocalStore';
import ErrorBoundary from './containers/ErrorBoundary';
import ResponsiveGrid from './containers/ResponsiveGrid';
import AppMenu from './display/AppMenu';
import settingsHandler from './modules/Settings/settingsModuleHandler';
import SettingsQuery from './modules/Settings/SettingsQuery';
import Task from './modules/Task/Task';
import taskHandler from './modules/Task/taskModuleHandler';
import { TaskTypeEnum } from './modules/TaskList/__generated__/TaskListQuery.graphql';
import TaskList from './modules/TaskList/TaskList';
import taskListHandler from './modules/TaskList/taskListModuleHandler';
import TaskTypeList from './modules/TaskTypeList/TaskTypeList';
import taskTypeListHandler from './modules/TaskTypeList/taskTypeListModuleHandler';

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

const styles = {
  backButton: {
    zIndex: 9,
    position: 'fixed',
    bottom: 20,
    left: 20,
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

const APP_MODULES_IDS = [MODULES_IDS.SETTINGS, MODULES_IDS.TASK_LIST, MODULES_IDS.TASK_TYPE_LIST];

export interface ModuleProps {
  moduleId: string;
}

export interface TaskModuleProps extends ModuleProps {
  editMode: boolean;
  isNew: boolean;
  taskId: string;
  type: TaskTypeEnum | null;
}

export interface AppState {
  activeModuleId: string;
  activeModulesHistory: string[];
  appOpenedModuleIds: MODULE[];
  openedTasksModulesProps: TaskModuleProps[];
  layouts: Layouts;
  gridView: boolean;
  gridViewLocked: boolean;
}

class App extends React.Component<StyledComponentProps<keyof typeof styles>, AppState> {
  state = {
    activeModuleId: MODULES_IDS.TASK_LIST,
    activeModulesHistory: [MODULES_IDS.TASK_LIST],
    appOpenedModuleIds: [MODULES_IDS.TASK_LIST],
    openedTasksModulesProps: new Array<TaskModuleProps>(),
    layouts: getFromLS(LOCAL_STORAGE_LAYOUTS_KEY) || {},
    gridView: false,
    gridViewLocked: false,
  };

  componentDidMount(): void {
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
  }

  render(): React.ReactNode {
    return <ErrorBoundary>{this.renderApplication()}</ErrorBoundary>;
  }

  private renderApplication(): React.ReactNode {
    const { classes } = this.props;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    const { activeModuleId, gridView } = this.state;
    const isTaskListModuleActive = MODULES_IDS.TASK_LIST === activeModuleId;

    return (
      <Fragment>
        {this.renderMenu()}
        {this.state.gridView ? this.renderResponsiveGrid() : this.renderModule()}
        {!(isTaskListModuleActive || gridView) && (
          <IconButton className={classes.backButton} onClick={this.onActiveModuleBack}>
            <NavigateBeforeIcon className={classes.backButtonIcon} />
          </IconButton>
        )}
      </Fragment>
    );
  }

  private updateState = (spec: Spec<AppState>): void =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.setState(immutabilityHelper(this.state, spec));

  private renderMenu(): React.ReactNode {
    const { gridView, gridViewLocked } = this.state;

    if (!this.props.classes) {
      return null;
    }

    return (
      <div className={this.props.classes.menuContainer}>
        <AppMenu
          options={[
            {
              label: 'Log out',
              action: () => window.location.replace('logout'),
            },
            {
              label: gridView ? 'Hide grid' : 'Show grid',
              action: this.onToggleGridView,
            },
            {
              label: gridViewLocked ? 'Unlock grid' : 'Lock grid',
              action: this.onToggleGridViewLocked,
            },
            {
              label: 'Reset grid',
              action: this.onResetGrid,
              visible: gridView,
            },
            {
              label: 'Show settings',
              action: this.onShowSettings,
            },
          ]}
        />
      </div>
    );
  }

  private onModuleZoom = (activeModuleId: MODULE): void => {
    const { appOpenedModuleIds } = this.state;
    const isApplicationModule = APP_MODULES_IDS.includes(activeModuleId);
    const setAppOpenedModuleIds = () => {
      return appOpenedModuleIds.includes(activeModuleId) ? appOpenedModuleIds : [...appOpenedModuleIds, activeModuleId];
    };

    this.setState({
      activeModuleId,
      activeModulesHistory: [MODULES_IDS.TASK_LIST, activeModuleId],
      gridView: false,
      appOpenedModuleIds: isApplicationModule ? setAppOpenedModuleIds() : appOpenedModuleIds,
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
          openedTasksModulesProps: openedTasksModulesProps.filter((props: ModuleProps): boolean => props.moduleId !== moduleId),
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
        activeModulesHistory: activeModulesHistory.filter(moduleId => moduleId !== activeModuleId),
        appOpenedModuleIds: appOpenedModuleIds.filter(id => id !== activeModuleId),
      });
    } else {
      this.setState({
        activeModuleId: activeModulesHistory[activeModulesHistory.length - 2],
        activeModulesHistory: activeModulesHistory.filter(moduleId => moduleId !== activeModuleId),
        openedTasksModulesProps: openedTasksModulesProps.filter(props => props.moduleId !== activeModuleId),
      });
    }
  };

  private onShowSettings = (): void => {
    this.setState({ activeModuleId: MODULES_IDS.SETTINGS });
  };

  private onResetGrid = (): void => {
    this.setState({ layouts: {} });
  };

  private onLayoutChange = (_layout: Layout, layouts: Layouts): void => {
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

  private renderTaskModule = (taskModuleProps: TaskModuleProps): React.ReactNode => {
    return <Task key={taskModuleProps.moduleId} {...taskHandler(taskModuleProps, this.state, this.updateState)} />;
  };

  private renderApplicationModule = (moduleId: MODULE): React.ReactNode => {
    switch (moduleId) {
      case MODULES_IDS.TASK_LIST: {
        return (
          <TaskList
            key={MODULES_IDS.TASK_LIST}
            moduleId={MODULES_IDS.TASK_LIST}
            {...taskListHandler({ moduleId: MODULES_IDS.TASK_LIST }, this.state, this.updateState)}
          />
        );
      }
      case MODULES_IDS.TASK_TYPE_LIST: {
        return (
          <TaskTypeList
            key={MODULES_IDS.TASK_TYPE_LIST}
            moduleId={MODULES_IDS.TASK_TYPE_LIST}
            {...taskTypeListHandler({ moduleId: MODULES_IDS.TASK_TYPE_LIST }, this.state, this.updateState)}
          />
        );
      }
      case MODULES_IDS.SETTINGS: {
        return (
          <SettingsQuery
            key={MODULES_IDS.SETTINGS}
            moduleId={MODULES_IDS.SETTINGS}
            {...settingsHandler({ moduleId: MODULES_IDS.SETTINGS })}
          />
        );
      }
      default: {
        throw new Error(`no application module: ${moduleId}`);
      }
    }
  };

  private renderResponsiveGrid(): React.ReactNode {
    const { appOpenedModuleIds, openedTasksModulesProps, layouts } = this.state;

    return (
      <ResponsiveGrid
        layouts={layouts}
        onModuleClose={this.onModuleClose}
        onModuleZoom={this.onModuleZoom}
        onLayoutChange={this.onLayoutChange}
      >
        {appOpenedModuleIds.map(this.renderApplicationModule)}
        {openedTasksModulesProps.map(this.renderTaskModule)}
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

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default withStyles(styles)(App);
