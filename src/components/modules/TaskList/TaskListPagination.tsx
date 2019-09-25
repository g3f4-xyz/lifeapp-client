import { Button, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, FC, Fragment, useState } from 'react';
import { createPaginationContainer, RelayPaginationProp } from 'react-relay';
import { TaskStatusEnum } from '../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import deleteTaskMutation from '../../../mutations/deleteTaskMutation';
import updateTaskListStatusFilterSettingMutation from '../../../mutations/updateTaskListStatusFilterSettingMutation';
import updateTaskListTaskTypeFilterSettingMutation from '../../../mutations/updateTaskListTaskTypeFilterSettingMutation';
import updateTaskListTitleFilterSettingMutation from '../../../mutations/updateTaskListTitleFilterSettingMutation';
import Loader from '../../display/loader/Loader';
import TaskListBar from '../../display/task-list-bar/TaskListBar';
import { TaskListPagination_data as TaskListPaginationResponse } from './__generated__/TaskListPagination_data.graphql.js';
import { TaskListQueryResponse, TaskTypeEnum } from './__generated__/TaskListQuery.graphql';
import TaskListFragment from './TaskListFragment';
import useTaskListPaginationStyles from './useTaskListPaginationStyles';

const PAGE_SIZE = 5;

interface TaskListPaginationProps {
  data: TaskListPaginationResponse;
  settings: TaskListQueryResponse['app']['settings']['taskList'];
  settingsId: string;
  relay: RelayPaginationProp;

  onAdd(): void;
  onEdit(taskId: string): void;
}

const TaskListPagination: FC<TaskListPaginationProps> = props => {
  const { data, onAdd, onEdit, settings } = props;
  const [loading, setLoading] = useState(false);
  const classes = useTaskListPaginationStyles();

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
    if (!props.relay.isLoading()) {
      props.relay.loadMore(PAGE_SIZE);
    }
  };

  const handleDelete = async (id: string): Promise<void> => {
    await deleteTaskMutation({ id, parentID: props.data.id });
  };

  const handleFilterByTitle = async (event: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    await updateTaskListTitleFilterSettingMutation({ title: event.target.value }, { parentID: props.settingsId });

    props.relay.refetchConnection(5, e => {
      if (e) {
        throw new Error(`error refetching task list after title filter mutation | ${e}`);
      }

      setLoading(false);
    });
  };

  const handleFilterByStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);

    await updateTaskListStatusFilterSettingMutation(
      {
        status: event.target.value.length > 0 ? (event.target.value as TaskStatusEnum) : null,
      },
      { parentID: props.settingsId },
    );

    props.relay.refetchConnection(5, e => {
      if (e) {
        throw new Error(`error refetching task list after status filter mutation | ${e}`);
      }

      setLoading(false);
    });
  };

  const handleFilterByTaskType = async (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const updatedTaskTypeFilter = updateTaskTypeFilter(checked, value as TaskTypeEnum);

    setLoading(true);

    await updateTaskListTaskTypeFilterSettingMutation({ taskType: updatedTaskTypeFilter }, { parentID: props.settingsId });

    props.relay.refetchConnection(5, e => {
      if (e) {
        throw new Error(`error refetching task list after title filter mutation | ${e}`);
      }

      setLoading(false);
    });
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
          {!loading && props.relay.hasMore() && (
            <IconButton className={classes.moreButton} color="primary" onClick={handleMore}>
              <MoreIcon className={classes.moreButtonIcon} />
            </IconButton>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default createPaginationContainer<TaskListPaginationProps>(
  TaskListPagination,
  {
    data: graphql`
      fragment TaskListPagination_data on TaskListType {
        id
        list(first: $count, after: $after) @connection(key: "TaskList_list") {
          edges {
            cursor
            node {
              id
              ...TaskListFragment_data
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
  },
  {
    direction: 'forward',
    query: graphql`
      query TaskListPaginationQuery($count: Int!, $after: String) {
        app {
          taskList {
            ...TaskListPagination_data
          }
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.data && props.data.list;
    },
    getFragmentVariables(previousVariables, totalCount) {
      return {
        ...previousVariables,
        count: totalCount,
      };
    },
    getVariables(_props, { cursor, count }) {
      return {
        count,
        after: cursor,
      };
    },
  },
);
