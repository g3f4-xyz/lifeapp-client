import { MODULES_IDS } from '../../../constans';

export default ({ moduleId }: any, data: any, state: any, update: any): any => ({
  moduleId,
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
  onDetails: (taskId: any) => {
    const activeModuleId = `${taskId}:details`;
    const { gridView, gridViewLocked, openedTasksModulesProps } = state;

    update({
      $merge: {
        activeModuleId,
        activeModulesHistory: [...state.activeModulesHistory, activeModuleId],
        gridView: gridView ? gridView : gridViewLocked,
        openedTasksModulesProps: [...openedTasksModulesProps, {
          editMode: false,
          isNew: false,
          moduleId: activeModuleId,
          taskId,
        }],
      },
    });
  },
  onEdit: (taskId: any) => {
    const { gridView, gridViewLocked, openedTasksModulesProps } = state;
    const moduleId = `${taskId}:edit`;

    update({
      $merge: {
        activeModuleId: moduleId,
        activeModulesHistory: [...state.activeModulesHistory, moduleId],
        gridView: gridView ? gridView : gridViewLocked,
        openedTasksModulesProps: [...openedTasksModulesProps, {
          editMode: true,
          isNew: false,
          moduleId,
          taskId,
        }],
      },
    });
  },
});
