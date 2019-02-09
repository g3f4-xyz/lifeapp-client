export type MODULE = 'settings' | 'task' | 'taskList' | 'taskTypeList';

export const MODULES_IDS: { [key: string]: MODULE } = {
  SETTINGS: 'settings',
  TASK: 'task',
  TASK_LIST: 'taskList',
  TASK_TYPE_LIST: 'taskTypeList',
};

export type FIELD_FORMAT = 'BOOL' | 'CHOICE' | 'MULTIPLE_CHOICE_WITH_PARENT' | 'NUMBER' | 'TEXT';

export const FIELD_FORMATS: { [key: string]: FIELD_FORMAT } = {
  BOOL: 'BOOL',
  CHOICE: 'CHOICE',
  MULTIPLE_CHOICE_WITH_PARENT: 'MULTIPLE_CHOICE_WITH_PARENT',
  NUMBER: 'NUMBER',
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

export type TASK_TYPE = 'EVENT' | 'MEETING' | 'ROUTINE' | 'TODO';

export const TASK_TYPES: { [key: string]: TASK_TYPE } = {
  EVENT: 'EVENT',
  MEETING: 'MEETING',
  ROUTINE: 'ROUTINE',
  TODO: 'TODO',
};

export type LOCAL_STORAGE_LAYOUT_KEY = 'layouts';

export const LOCAL_STORAGE_LAYOUTS_KEY = 'layouts';

export const CUSTOM_OPTION_VALUE = 'CUSTOM';

export const API_HOST = process.env.REACT_APP_HOST || '';
