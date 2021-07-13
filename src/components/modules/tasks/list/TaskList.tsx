import { Button, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import React, { ChangeEvent, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { ITEMS_PER_PAGE, MODULES_IDS, TaskStatusEnum, TaskTypeEnum } from '../../../../constans';
import Loader from '../../../display/loader/Loader';
import TaskListBar from '../../../display/task-list-bar/TaskListBar';
import { useTaskListPagination$key } from './__generated__/useTaskListPagination.graphql';
import TaskListItem from './item/TaskListItem';
import useDeleteTaskMutation from './useDeleteTaskMutation';
import useTaskListPagination from './useTaskListPagination';
import useTaskListStyles from './useTaskListStyles';
import useUpdateTaskListStatusFilterSettingMutation from './useUpdateTaskListStatusFilterSettingMutation';
import useUpdateTaskListTaskTypeFilterSettingMutation from './useUpdateTaskListTaskTypeFilterSettingMutation';
import useUpdateTaskListTitleFilterSettingMutation from './useUpdateTaskListTitleFilterSettingMutation';

interface TaskListProps {
  data: useTaskListPagination$key;
}

export default function TaskList(props: TaskListProps) {
  const classes = useTaskListStyles();
  const {
    response: { tasks, settings },
    hasMore,
    isLoading,
    loadMore,
    refetchConnection,
  } = useTaskListPagination(props.data, ITEMS_PER_PAGE);
  const history = useHistory();
  const updateTaskListTitleFilterSetting = useUpdateTaskListTitleFilterSettingMutation();
  const updateTaskListTaskTypeFilterSetting = useUpdateTaskListTaskTypeFilterSettingMutation();
  const updateTaskListStatusFilterSetting = useUpdateTaskListStatusFilterSettingMutation();
  const deleteTaskMutation = useDeleteTaskMutation(tasks ? tasks.id : '');
  const handleAdd = useCallback(() => {
    history.push(`/app/${MODULES_IDS.TASK_TYPE_LIST}`);
  }, [history]);
  const handleEdit = useCallback(
    (taskType: TaskTypeEnum, taskId: string) => {
      history.push(`/app/${MODULES_IDS.TASK}/${taskType}/${taskId}`);
    },
    [history],
  );
  const updateTaskTypeFilter = (checked: boolean, filter: TaskTypeEnum): TaskTypeEnum[] => {
    const {
      taskList: {
        filters: { taskType },
      },
    } = settings;

    if (checked) {
      return [...taskType, filter];
    }

    return taskType.filter((activeFilter) => activeFilter !== filter);
  };
  const handleMore = () => {
    if (!isLoading) {
      loadMore();
    }
  };
  const handleDelete = async (id: string): Promise<void> => {
    await deleteTaskMutation({ id });
  };
  const handleFilterByTitle = async (event: ChangeEvent<HTMLInputElement>) => {
    await updateTaskListTitleFilterSetting({ title: event.target.value });

    refetchConnection();
  };
  const handleFilterByStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    await updateTaskListStatusFilterSetting({
      status: event.target.value.length > 0 ? (event.target.value as TaskStatusEnum) : null,
    });

    refetchConnection();
  };
  const handleFilterByTaskType = async (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const updatedTaskTypeFilter = updateTaskTypeFilter(checked, value as TaskTypeEnum);

    await updateTaskListTaskTypeFilterSetting({ taskType: updatedTaskTypeFilter });

    refetchConnection();
  };

  if (!tasks || !tasks.list || !tasks.list.edges) {
    return <Loader />;
  }

  const {
    list: { edges },
  } = tasks;

  return (
    <>
      <TaskListBar
        onFilterByTitle={handleFilterByTitle}
        onFilterByType={handleFilterByTaskType}
        onFilterByStatus={handleFilterByStatus}
        taskListSettings={settings.taskList}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={1}>
            {edges.map(
              (edge) =>
                edge &&
                edge.node && (
                  <Grid key={edge.node.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <TaskListItem data={edge.node} onDelete={handleDelete} onEdit={handleEdit} />
                  </Grid>
                ),
            )}
          </Grid>
          <Button color="primary" className={classes.addButton} onClick={handleAdd}>
            <AddBoxIcon className={classes.addButtonIcon} />
          </Button>
          {isLoading && <Loader />}
          {!isLoading && hasMore() && (
            <IconButton className={classes.moreButton} color="primary" onClick={handleMore}>
              <MoreIcon className={classes.moreButtonIcon} />
            </IconButton>
          )}
        </>
      )}
    </>
  );
}
