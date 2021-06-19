import { FieldId, FieldType } from './components/modules/task/fragment/__generated__/useTaskFragment.graphql';
import { TaskTypeId } from './components/modules/task-type-list/fragment/__generated__/useTaskTypeFragment.graphql';
import { TaskStatus } from './mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';

export type ExcludeFutureAdded<T> = Omit<T, '%future added value'>;
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

export const FIELD_ID: ExcludeFutureAdded<UnionKeyToValue<FieldId>> = {
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
  NOTIFICATION: 'NOTIFICATION',
};

export const FIELD_TYPE: ExcludeFutureAdded<UnionKeyToValue<FieldType>> = {
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

export const TASK_TYPE: ExcludeFutureAdded<UnionKeyToValue<TaskTypeId>> = {
  EVENT: 'EVENT',
  GOAL: 'GOAL',
  MEETING: 'MEETING',
  ROUTINE: 'ROUTINE',
  TODO: 'TODO',
};

export type TASK_TYPE_VALUE_MAP<V> = KEYOF_TYPE_VALUE_MAP<typeof TASK_TYPE, V>;

export const TASK_STATUSES: ExcludeFutureAdded<UnionKeyToValue<TaskStatus>> = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

export type FieldTypeEnum = FieldType;
export type FieldIdEnum = FieldId;
export type TaskTypeEnum = TaskTypeId;
export type TaskStatusEnum = TaskStatus;

export const DATE_TIME_FORMAT = `YYYY-MM-DDTHH:mm`;

// eslint-disable-next-line no-undef
export const HOST = process.env.REACT_APP_GRAPHQL_HOST
  ? // eslint-disable-next-line no-undef
    process.env.REACT_APP_GRAPHQL_HOST.slice(0, -8)
  : '';
