import { FieldFormatEnum, TaskTypeEnum } from './components/modules/Task/__generated__/TaskFragment.graphql';
import { TaskStatusEnum } from './components/modules/TaskList/__generated__/TaskListFragment.graphql';

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
type ExcludeFutureAdded<T> = Without<T, '%future added value'>;
type UnionKeyToValue<U extends string> = {
  [K in U]: K
};

export type MODULE = 'settings' | 'task' | 'taskList' | 'taskTypeList';

export const ITEMS_PER_PAGE = 5;

export const MODULES_IDS: { [key: string]: MODULE } = {
  SETTINGS: 'settings',
  TASK: 'task',
  TASK_LIST: 'taskList',
  TASK_TYPE_LIST: 'taskTypeList',
};

export const FIELD_FORMATS: { [key: string]: FieldFormatEnum } = {
  BOOL: 'BOOL',
  CHOICE: 'CHOICE',
  MULTIPLE_CHOICE_WITH_PARENT: 'MULTIPLE_CHOICE_WITH_PARENT',
  TEXT: 'TEXT',
};

export type DEVICE = 'desktop' | 'mobile' | '';

export const DEVICES: { [key: string]: DEVICE } = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
  OTHER: '',
};

export type STATUS = '201' | '410';

export const STATUSES: { [key: string]: STATUS } = {
  OK: '201',
  NOT_REGISTERED: '410',
};

export const TASK_TYPES: ExcludeFutureAdded<UnionKeyToValue<TaskTypeEnum>> = {
  EVENT: 'EVENT',
  MEETING: 'MEETING',
  ROUTINE: 'ROUTINE',
  TODO: 'TODO',
};

export type TaskTypesValueMap<V> = {
  [K in keyof typeof TASK_TYPES]: V
};

export const TASK_STATUSES: ExcludeFutureAdded<UnionKeyToValue<TaskStatusEnum>> = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

export type LOCAL_STORAGE_LAYOUT_KEY = 'layouts';

export const LOCAL_STORAGE_LAYOUTS_KEY = 'layouts';

export const CUSTOM_OPTION_VALUE = 'CUSTOM';

export const API_HOST = process.env.REACT_APP_HOST || '';
