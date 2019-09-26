import { Spec } from 'immutability-helper';
import { MODULES_IDS } from '../../../constans';
import { AppState, ModuleProps } from '../../App';

export interface TaskListHandlerProps extends ModuleProps {
  onAdd(): void;
  onEdit(taskId: string): void;
}

export default (
  moduleProps: ModuleProps,
  state: AppState,
  update: (spec: Spec<AppState>) => void,
): TaskListHandlerProps => ({
  moduleId: moduleProps.moduleId,
  onAdd: () => {
    update({
      $merge: {
        appOpenedModuleIds: state.appOpenedModuleIds.includes(MODULES_IDS.TASK_TYPE_LIST)
          ? state.appOpenedModuleIds
          : [...state.appOpenedModuleIds, MODULES_IDS.TASK_TYPE_LIST],
        activeModuleId: MODULES_IDS.TASK_TYPE_LIST,
        activeModulesHistory: [...state.activeModulesHistory, MODULES_IDS.TASK_TYPE_LIST],
      },
    });
  },
  onEdit: (taskId: string) => {
    const { gridView, gridViewLocked, openedTasksModulesProps } = state;
    const moduleId = `${taskId}:edit`;

    update({
      $merge: {
        activeModuleId: moduleId,
        activeModulesHistory: [...state.activeModulesHistory, moduleId],
        gridView: gridView ? gridView : gridViewLocked,
        openedTasksModulesProps: [
          ...openedTasksModulesProps,
          {
            editMode: true,
            isNew: false,
            moduleId,
            taskId,
            type: null,
          },
        ],
      },
    });
  },
});
