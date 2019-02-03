export default ({ moduleId }: any, data: any, state: any, update: any) => ({
  moduleId,
  onSelect: (type: any) => {
    const { gridView, gridViewLocked, openedTasksModulesProps } = state;
    const temporaryId = `${Date.now()}:temporaryId`;

    update({
      $merge: {
        activeModuleId: temporaryId,
        activeModulesHistory: [...state.activeModulesHistory, temporaryId],
        gridView: gridView ? gridView : gridViewLocked,
        openedTasksModulesProps: [...openedTasksModulesProps, {
          editMode: true,
          isNew: true,
          moduleId: temporaryId,
          taskId: temporaryId,
          type,
        }],
      },
    });
  },
});
