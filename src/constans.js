export const MODULES_IDS = {
  SETTINGS: 'settings',
  TASK: 'task',
  TASK_LIST: 'taskList',
  TASK_TYPE_LIST: 'taskTypeList',
};

export const FIELD_FORMATS = {
  BOOL: 'BOOL',
  CHOICE: 'CHOICE',
  MULTIPLE_CHOICE_WITH_PARENT: 'MULTIPLE_CHOICE_WITH_PARENT',
  NUMBER: 'NUMBER',
  TEXT: 'TEXT',
};

export const STATUSES_MAP = {
  OK: '201',
  NOT_REGISTERED: '410',
};

export const LOCAL_STORAGE_LAYOUTS_KEY = 'layouts';

export const CUSTOM_OPTION_VALUE = 'CUSTOM';

export const API_HOST = process.env.HOST || 'http://localhost:30000';
