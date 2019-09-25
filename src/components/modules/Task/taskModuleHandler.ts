import { Spec } from 'immutability-helper';
import { MODULES_IDS } from '../../../constans';
import { AppState, TaskModuleProps } from '../../App';

interface TaskHandlerProps extends TaskModuleProps {
  onDone(taskId: string): void;
}

export default (
  moduleProps: TaskModuleProps,
  state: AppState,
  update: (spec: Spec<AppState>) => void,
): TaskHandlerProps => ({
  ...moduleProps,
  onDone: (taskId: string) => {
    update({
      $merge: {
        activeModuleId: MODULES_IDS.TASK_LIST,
        activeModulesHistory: [MODULES_IDS.TASK_LIST],
        openedTasksModulesProps: state.openedTasksModulesProps.filter(
          props => props.taskId === taskId,
        ),
      },
    });
  },
});
