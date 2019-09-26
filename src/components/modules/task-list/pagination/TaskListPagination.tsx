import { Button, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import React, { ChangeEvent, FC, Fragment, useState } from 'react';
import { TaskTypeEnum } from '../../../../constans';
import { TaskStatusEnum } from '../../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import deleteTaskMutation from '../../../../mutations/deleteTaskMutation';
import updateTaskListStatusFilterSettingMutation from '../../../../mutations/updateTaskListStatusFilterSettingMutation';
import updateTaskListTaskTypeFilterSettingMutation from '../../../../mutations/updateTaskListTaskTypeFilterSettingMutation';
import updateTaskListTitleFilterSettingMutation from '../../../../mutations/updateTaskListTitleFilterSettingMutation';
import Loader from '../../../display/loader/Loader';
import TaskListBar from '../../../display/task-list-bar/TaskListBar';
import { useTaskListQuery } from '../__generated__/useTaskListQuery.graphql';
import TaskListFragment from '../fragment/TaskListFragment';
import { useTaskListPagination$ref } from './__generated__/useTaskListPagination.graphql';
import useTaskListPagination from './useTaskListPagination';
import useTaskListPaginationStyles from './useTaskListPaginationStyles';

interface TaskListPaginationProps {
  data: useTaskListPagination$ref;
  settings: useTaskListQuery['response']['app']['settings']['taskList'];
  settingsId: string;

  onAdd(): void;
  onEdit(taskId: string): void;
}

const TaskListPagination: FC<TaskListPaginationProps> = props => {
  const { onAdd, onEdit, settings } = props;
  const [loading, setLoading] = useState(false);
  const classes = useTaskListPaginationStyles();
  const [data, { hasMore, isLoading, loadMore, refetchConnection }] = useTaskListPagination(
    props.data,
    8,
  );

  const updateTaskTypeFilter = (checked: boolean, filter: TaskTypeEnum): TaskTypeEnum[] => {
    const {
      settings: {
        filters: { taskType },
      },
    } = props;

    if (checked) {
      return [...taskType, filter];
    }

    return taskType.filter(activeFilter => activeFilter !== filter);
  };

  const handleMore = () => {
    if (!isLoading()) {
      loadMore();
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    await deleteTaskMutation({ id, parentID: props.data.id });
  };

  const handleFilterByTitle = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    await updateTaskListTitleFilterSettingMutation(
      { title: event.target.value },
      { parentID: props.settingsId },
    );

    refetchConnection();

    setLoading(false);
  };

  const handleFilterByStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);

    await updateTaskListStatusFilterSettingMutation(
      {
        status: event.target.value.length > 0 ? (event.target.value as TaskStatusEnum) : null,
      },
      { parentID: props.settingsId },
    );

    refetchConnection();

    setLoading(false);
  };

  const handleFilterByTaskType = async (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const updatedTaskTypeFilter = updateTaskTypeFilter(checked, value as TaskTypeEnum);

    setLoading(true);

    await updateTaskListTaskTypeFilterSettingMutation(
      { taskType: updatedTaskTypeFilter },
      { parentID: props.settingsId },
    );

    refetchConnection();

    setLoading(false);
  };

  if (!data || !data.list || !data.list.edges) {
    return <Loader />;
  }

  const {
    list: { edges },
  } = data;

  return (
    <Fragment>
      <TaskListBar
        onFilterByTitle={handleFilterByTitle}
        onFilterByType={handleFilterByTaskType}
        onFilterByStatus={handleFilterByStatus}
        settings={settings}
      />
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Grid container spacing={1}>
            {edges.map(
              edge =>
                edge &&
                edge.node && (
                  <Grid key={edge.cursor} item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <TaskListFragment data={edge.node} onDelete={handleDelete} onEdit={onEdit} />
                  </Grid>
                ),
            )}
          </Grid>
          <Button color="primary" className={classes.addButton} onClick={onAdd}>
            <AddBoxIcon className={classes.addButtonIcon} />
          </Button>
          {loading && <Loader />}
          {!loading && hasMore() && (
            <IconButton className={classes.moreButton} color="primary" onClick={handleMore}>
              <MoreIcon className={classes.moreButtonIcon} />
            </IconButton>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default TaskListPagination;
