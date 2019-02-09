import { TASK_TYPE } from '../../../constans';
import { ModuleProps } from '../../App';

interface TaskTypeListHandlerProps extends ModuleProps {
  onSelect(type: TASK_TYPE): void;
}

export default ({ moduleId }: ModuleProps, state: any, update: any): TaskTypeListHandlerProps => ({
  moduleId,
  onSelect: (type: any) => {
    const { gridView, gridViewLocked, openedTasksModulesProps } = state;
    const temporaryId = `${Date.now()}:temporaryId`;

    update({
      $merge: {
        activeModuleId: temporaryId,
        activeModulesHistory: [...state.activeModulesHistory, temporaryId],
        gridView: gridView ? gridView : gridViewLocked,
        openedTasksModulesProps: [...openedTasksModulesProps, {
          editMode: true,
          isNew: true,
          moduleId: temporaryId,
          taskId: temporaryId,
          type,
        }],
      },
    });
  },
});
