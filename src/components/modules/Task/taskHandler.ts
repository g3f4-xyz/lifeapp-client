import { MODULES_IDS } from '../../../constans';
import { AppState, ModuleProps } from '../../App';

interface TaskHandlerProps extends ModuleProps {
  onSaveDone(taskId: string): void;
}

export default (moduleProps: ModuleProps, state: AppState, update: any): TaskHandlerProps => ({
  ...moduleProps,
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
