import { createContext } from 'react';
import { TaskTypeEnum } from './constans';

export interface TaskParams {
  taskType: TaskTypeEnum;
  taskId: string;
}

export interface AppContextValue {
  openedTasksParams: TaskParams[];
}

export interface AppContextProps {
  value: AppContextValue;

  addTaskParam(taskParams: TaskParams): void;
  removeTaskParam(taskParams: TaskParams): void;
}

const AppContext = createContext<AppContextProps>({
  value: {
    openedTasksParams: [],
  },

  addTaskParam(): void {
    return;
  },
  removeTaskParam(): void {
    return;
  },
});

export default AppContext;
