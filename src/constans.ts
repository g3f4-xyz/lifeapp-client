import { FieldIdEnum } from './components/modules/Task/__generated__/TaskFragment_data.graphql';
import { FieldTypeEnum } from './components/modules/Task/fields/__generated__/ChoiceFieldFragmentMeta.graphql';
import { TaskTypeEnum } from './components/modules/TaskList/__generated__/TaskListQuery.graphql';
import { TaskStatusEnum } from './mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';

export type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
export type ExcludeFutureAdded<T> = Without<T, '%future added value'>;
export type UnionKeyToValue<U extends string, V = U> = {
  [K in U]: V;
};

type KEYOF_TYPE_VALUE_MAP<T, V> = {
  [K in keyof T]: V;
};

export type MODULE = 'settings' | 'task' | 'taskList' | 'taskTypeList';

export const ITEMS_PER_PAGE = 5;

export const MODULES_IDS: { [key: string]: MODULE } = {
  SETTINGS: 'settings',
  TASK: 'task',
  TASK_LIST: 'taskList',
  TASK_TYPE_LIST: 'taskTypeList',
};

export const FIELD_ID: ExcludeFutureAdded<UnionKeyToValue<FieldIdEnum>> = {
  TITLE: 'TITLE',
  PRIORITY: 'PRIORITY',
  PROGRESS: 'PROGRESS',
  ACTIVE: 'ACTIVE',
  STATUS: 'STATUS',
  DATE: 'DATE',
  DATE_TIME: 'DATE_TIME',
  DURATION: 'DURATION',
  LOCATION: 'LOCATION',
  PERSON: 'PERSON',
  NOTE: 'NOTE',
  ACTION: 'ACTION',
  CYCLE: 'CYCLE',
  NOTIFICATIONS: 'NOTIFICATIONS',
};

export const FIELD_TYPE: ExcludeFutureAdded<UnionKeyToValue<FieldTypeEnum>> = {
  CHOICE: 'CHOICE',
  SLIDER: 'SLIDER',
  SWITCH: 'SWITCH',
  TEXT: 'TEXT',
  NESTED: 'NESTED',
};

export type FIELD_TYPE_VALUE_MAP<V> = KEYOF_TYPE_VALUE_MAP<typeof FIELD_TYPE, V>;

export type DEVICE = 'desktop' | 'mobile' | '';

export const DEVICES: { [key: string]: DEVICE } = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
  OTHER: '',
};

export type STATUS = '201' | '408' | '410';

export const STATUSES: { [key: string]: STATUS } = {
  OK: '201',
  REQUEST_TIMEOUT: '408',
  NOT_REGISTERED: '410',
};

export const TASK_TYPE: ExcludeFutureAdded<UnionKeyToValue<TaskTypeEnum>> = {
  EVENT: 'EVENT',
  GOAL: 'GOAL',
  MEETING: 'MEETING',
  ROUTINE: 'ROUTINE',
  TODO: 'TODO',
};

export type TASK_TYPE_VALUE_MAP<V> = KEYOF_TYPE_VALUE_MAP<typeof TASK_TYPE, V>;

export const TASK_STATUSES: ExcludeFutureAdded<UnionKeyToValue<TaskStatusEnum>> = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

export type LOCAL_STORAGE_LAYOUT_KEY = 'layouts';

export const LOCAL_STORAGE_LAYOUTS_KEY = 'layouts';
