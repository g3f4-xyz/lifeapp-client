import { Button, IconButton, StyledComponentProps, withStyles } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MoreIcon from '@material-ui/icons/MoreHoriz';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, Fragment } from 'react';
import { ConnectionData, createPaginationContainer, RelayPaginationProp } from 'react-relay';
import { TaskStatusEnum } from '../../../mutations/__generated__/updateTaskListStatusFilterSettingMutation.graphql';
import deleteTaskMutation from '../../../mutations/deleteTaskMutation';
import updateTaskListStatusFilterSettingMutation from '../../../mutations/updateTaskListStatusFilterSettingMutation';
import updateTaskListTaskTypeFilterSettingMutation
  from '../../../mutations/updateTaskListTaskTypeFilterSettingMutation';
import updateTaskListTitleFilterSettingMutation from '../../../mutations/updateTaskListTitleFilterSettingMutation';
import Loader from '../../display/Loader';
import TaskListBar from '../../display/TaskListBar';
import { TaskTypeEnum } from './__generated__/TaskListFragment.graphql';
import { TaskListPagination as TaskListPaginationResponse } from './__generated__/TaskListPagination.graphql';
import { TaskListQueryResponse } from './__generated__/TaskListQuery.graphql';
import TaskListFragment from './TaskListFragment';

const PAGE_SIZE = 5;

const styles = {
  addButton: {
    zIndex: 9,
    position: 'fixed',
    bottom: 20,
    left: 20,
  },
  addButtonIcon: {
    fontSize: 72,
  },
  moreButton: {
    zIndex: 9,
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  moreButtonIcon: {
    fontSize: 72,
  },
  listLoader: {
    marginTop: 20,
  },
};

interface Props extends StyledComponentProps<keyof typeof styles> {
  data: TaskListPaginationResponse;
  settings: TaskListQueryResponse['app']['settings']['taskList'];
  settingsId: string;
  relay: RelayPaginationProp;

  onAdd(): void;
  onEdit(taskId: string): void;
}

interface State {
  loading: boolean;
}

class TaskListPagination extends React.Component<Props, State> {
  state = {
    loading: false,
  };

  updateTaskTypeFilter = (checked: boolean, filter: TaskTypeEnum): TaskTypeEnum[] => {
    const { settings: { filters: { taskType }} } = this.props;

    if (checked) {
      return [...taskType, filter];
    }

    return taskType.filter(activeFilter => activeFilter !== filter);
  };

  handleMore = () => {
    if (!this.props.relay.isLoading()) {
      // TODO when data comes, relay.isLoading is returning true, so we need to render page one more time
      this.forceUpdate();
      this.props.relay.loadMore(PAGE_SIZE, () => {
        this.forceUpdate();
      });
    }
  };

  handleDelete = async (id: string): Promise<void> => {
    await deleteTaskMutation({ id, parentID: this.props.data.id });
  };

  handleFilterByTitle = async (event: ChangeEvent<HTMLInputElement>) => {
    console.log(['handleFilterByTitle'], event);

    this.setState({ loading: true });

    await updateTaskListTitleFilterSettingMutation({ title: event.target.value }, { parentID: this.props.settingsId });
    this.props.relay.refetchConnection(5, (e) => {
      if (e) {
        throw new Error(`error refetching task list after title filter mutation | ${e}`);
      }

      this.setState({ loading: false });
    });
  };

  handleFilterByStatus = async (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(['handleFilterByStatus'], event.target.value);

    this.setState({ loading: true });

    await updateTaskListStatusFilterSettingMutation(
      { status: event.target.value.length > 0 ? event.target.value as TaskStatusEnum : null },
      { parentID: this.props.settingsId },
    );
    this.props.relay.refetchConnection(5, (e) => {
      if (e) {
        throw new Error(`error refetching task list after status filter mutation | ${e}`);
      }

      this.setState({ loading: false });
    });
  };

  handleFilterByTaskType = async (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const updatedTaskTypeFilter = this.updateTaskTypeFilter(checked, value as TaskTypeEnum);

    this.setState({ loading: true });

    await updateTaskListTaskTypeFilterSettingMutation({ taskType: updatedTaskTypeFilter }, { parentID: this.props.settingsId });
    this.props.relay.refetchConnection(5, (e) => {
      if (e) {
        throw new Error(`error refetching task list after title filter mutation | ${e}`);
      }

      this.setState({ loading: false });
    });
  };

  render(): React.ReactNode {
    const { classes, data, onAdd, onEdit, settings } = this.props;
    const { loading } = this.state;

    if (!classes) {
      throw new Error(`error loading styles`);
    }

    if (!data || !data.list || !data.list.edges)  {
      return (
        <Loader />
      );
    }

    const { list: { edges } } = data;

    return (
      <Fragment>
        <TaskListBar
          onFilterByTitle={this.handleFilterByTitle}
          onFilterByType={this.handleFilterByTaskType}
          onFilterByStatus={this.handleFilterByStatus}
          settings={settings}
        />
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            {edges.map((edge) => edge && edge.node && (
              <TaskListFragment
                key={edge.cursor}
                data={edge.node}
                onDelete={this.handleDelete}
                onEdit={onEdit}
              />
            ))}
            <Button
              color="primary"
              className={classes.addButton}
              onClick={onAdd}
            >
              <AddBoxIcon className={classes.addButtonIcon} />
            </Button>
            {this.props.relay.isLoading() && (
              <Loader />
            )}
            {!this.props.relay.isLoading() && this.props.relay.hasMore() && (
              <IconButton
                className={classes.moreButton}
                color="primary"
                onClick={this.handleMore}
              >
                <MoreIcon className={classes.moreButtonIcon} />
              </IconButton>
            )}
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default createPaginationContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TaskListPagination),
  graphql`
    fragment TaskListPagination on TaskListType {
      id
      list(
        first: $count,
        after: $after,
        
      ) @connection(key: "TaskList_list") {
        edges {
          cursor
          node {
            id
            ...TaskListFragment
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `,
  {
    direction: 'forward',
    query: graphql`
      query TaskListPaginationQuery(
        $count: Int!,
        $after: String,
      ) {
        app {
          taskList {
            ...TaskListPagination
          }
        }
      }
    `,
    getConnectionFromProps(props) {
      return props.data && props.data.list as ConnectionData;
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
