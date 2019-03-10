import { IconButton, StyledComponentProps, withStyles } from '@material-ui/core';
import { AddCircle, More } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { ChangeEvent, Fragment } from 'react';
import { ConnectionData, createPaginationContainer, RelayPaginationProp } from 'react-relay';
import deleteTaskMutation from '../../../mutations/deleteTaskMutation';
import updateTaskListTitleFilterSettingMutation from '../../../mutations/updateTaskListTitleFilterSettingMutation';
import Loader from '../../display/Loader';
import TaskListBar from '../../display/TaskListBar';
import { TaskListPagination as TaskListPaginationResponse } from './__generated__/TaskListPagination.graphql';
import { TaskListQueryResponse } from './__generated__/TaskListQuery.graphql';
import TaskListFragment from './TaskListFragment';

const PAGE_SIZE = 5;

const styles = {
  addButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    left: 20,
    height: 72,
    width: 72,
  },
  addButtonIcon: {
    fontSize: 72,
  },
  moreButton: {
    zIndex: 9,
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 72,
    width: 72,
  },
  moreButtonIcon: {
    fontSize: 72,
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

class TaskListPagination extends React.Component<Props> {
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

    await updateTaskListTitleFilterSettingMutation({ title: event.target.value }, { parentID: this.props.settingsId });
    this.props.relay.refetchConnection(5, (e) => {
      if (e) {
        throw new Error(`error refetching task list after title filter mutation | ${e}`);
      }
    });
  };

  render(): React.ReactNode {
    const { classes, data, onAdd, onEdit, settings } = this.props;

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
        <TaskListBar onFilterByTitle={this.handleFilterByTitle} settings={settings} />
        {edges.map((edge) => edge && edge.node && (
          <TaskListFragment
            key={edge.cursor}
            data={edge.node}
            onDelete={this.handleDelete}
            onEdit={onEdit}
          />
        ))}
        <IconButton
          className={classes.addButton}
          color="primary"
          onClick={onAdd}
        >
          <AddCircle className={classes.addButtonIcon} />
        </IconButton>
        {this.props.relay.hasMore() && (
          <IconButton
            className={classes.moreButton}
            color="primary"
            onClick={this.handleMore}
          >
            {this.props.relay.isLoading() ? (
              <Loader />
            ) : (
              <More className={classes.moreButtonIcon} />
            )}
          </IconButton>
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
