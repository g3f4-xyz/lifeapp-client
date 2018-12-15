import Component from './SettingsQuery';
import { MODULES_IDS } from '../../../constans';

export default Component;

export const handler = (moduleProps, data, state, update) => ({
  ...moduleProps,
  onSaveDone: () => {
    console.log(['moduleHandlers:settings:onSaveDone']);

    update({
      $merge: {
        activeModuleId: MODULES_IDS.TASK_LIST,
        activeModulesHistory: [MODULES_IDS.TASK_LIST],
      }
    })
  },
});
