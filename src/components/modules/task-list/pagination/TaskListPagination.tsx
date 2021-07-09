import { Button, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import React, { ChangeEvent, FC, Fragment, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ITEMS_PER_PAGE, MODULES_IDS, TaskStatusEnum, TaskTypeEnum } from '../../../../constans';
import useDeleteTaskMutation from './useDeleteTaskMutation';
import useUpdateTaskListStatusFilterSettingMutation from './useUpdateTaskListStatusFilterSettingMutation';
import useUpdateTaskListTaskTypeFilterSettingMutation from './useUpdateTaskListTaskTypeFilterSettingMutation';
import useUpdateTaskListTitleFilterSettingMutation from './useUpdateTaskListTitleFilterSettingMutation';
import Loader from '../../../display/loader/Loader';
import TaskListBar from '../../../display/task-list-bar/TaskListBar';
import { useTaskListQuery } from '../__generated__/useTaskListQuery.graphql';
import TaskListFragment from '../fragment/TaskListFragment';
import { useTaskListPagination$ref } from './__generated__/useTaskListPagination.graphql';
import useTaskListPagination from './useTaskListPagination';
import useTaskListPaginationStyles from './useTaskListPaginationStyles';

interface TaskListPaginationProps {
  data: useTaskListPagination$ref;
  settings: useTaskListQuery['response']['settings']['taskList'];
  settingsId: string;
}

const TaskListPagination: FC<TaskListPaginationProps> = props => {
  const { settings } = props;
  const [loading, setLoading] = useState(false);
  const classes = useTaskListPaginationStyles();
  const [data, { hasMore, isLoading, loadMore, refetchConnection }] = useTaskListPagination(
    props.data,
    ITEMS_PER_PAGE,
  );
  const history = useHistory();
  const updateTaskListTitleFilterSetting = useUpdateTaskListTitleFilterSettingMutation(
    props.settingsId,
  );
  const updateTaskListTaskTypeFilterSetting = useUpdateTaskListTaskTypeFilterSettingMutation(
    props.settingsId,
  );
  const updateTaskListStatusFilterSetting = useUpdateTaskListStatusFilterSettingMutation(
    props.settingsId,
  );
  const deleteTaskMutation = useDeleteTaskMutation(data.id);
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
    await deleteTaskMutation({ id });
  };

  const handleFilterByTitle = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    await updateTaskListTitleFilterSetting({ title: event.target.value });

    refetchConnection();

    setLoading(false);
  };

  const handleFilterByStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);

    await updateTaskListStatusFilterSetting({
      status: event.target.value.length > 0 ? (event.target.value as TaskStatusEnum) : null,
    });

    refetchConnection();

    setLoading(false);
  };

  const handleFilterByTaskType = async (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const updatedTaskTypeFilter = updateTaskTypeFilter(checked, value as TaskTypeEnum);

    setLoading(true);

    await updateTaskListTaskTypeFilterSetting({ taskType: updatedTaskTypeFilter });

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
                  <Grid key={edge.node.id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                    <TaskListFragment
                      data={edge.node}
                      onDelete={handleDelete}
                      onEdit={handleEdit}
                    />
                  </Grid>
                ),
            )}
          </Grid>
          <Button color="primary" className={classes.addButton} onClick={handleAdd}>
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
