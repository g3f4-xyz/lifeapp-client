import { MODULES_IDS } from '../../../constans';

export default (moduleProps: any, data: any, state: any, update: any) => ({
  ...moduleProps,
  taskListId: data.app.taskList.id,
  onSaveDone: (taskId: any) => {
    update({
      $merge: {
        activeModuleId: MODULES_IDS.TASK_LIST,
        activeModulesHistory: [MODULES_IDS.TASK_LIST],
        openedTasksModulesProps: state.openedTasksModulesProps.filter((props: any) => props.taskId === taskId),
      },
    });
  },
});
