import { Spec } from 'immutability-helper';
import { AppState, ModuleProps } from '../../App';
import { TaskTypeEnum } from '../TaskList/__generated__/TaskListQuery.graphql';

interface TaskTypeListHandlerProps extends ModuleProps {
  onSelect(type: TaskTypeEnum): void;
}

export default ({ moduleId }: ModuleProps, state: AppState, update: (spec: Spec<AppState>) => void): TaskTypeListHandlerProps => ({
  moduleId,
  onSelect: (type: TaskTypeEnum) => {
    const { gridView, gridViewLocked, openedTasksModulesProps } = state;
    const taskModuleId = `task:${Date.now()}`;

    update({
      $merge: {
        activeModuleId: taskModuleId,
        activeModulesHistory: [...state.activeModulesHistory, taskModuleId],
        gridView: gridView ? gridView : gridViewLocked,
        openedTasksModulesProps: [
          ...openedTasksModulesProps,
          {
            editMode: true,
            isNew: true,
            moduleId: taskModuleId,
            taskId: '',
            type,
          },
        ],
      },
    });
  },
});
