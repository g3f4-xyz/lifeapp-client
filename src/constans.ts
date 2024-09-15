import { FieldId, FieldType } from './modules/task/__generated__/useTaskFragment.graphql';
import { TaskStatus } from './modules/tasks/list/__generated__/useUpdateTaskListStatusFilterSettingMutation.graphql';

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

export const FIELD_ID: UnionKeyToValue<FieldId> = {
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

export const FIELD_TYPE: UnionKeyToValue<FieldType> = {
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

export const predefinedTaskTypes = ['EVENT', 'GOAL', 'MEETING', 'ROUTINE', 'TODO'];

export const TASK_STATUSES: UnionKeyToValue<TaskStatusEnum> = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  DONE: 'DONE',
};

export type FieldIdEnum = FieldId;
export type TaskStatusEnum = TaskStatus;

export const DATE_TIME_FORMAT = `YYYY-MM-DDTHH:mm`;
