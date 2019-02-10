import { IconButton, StyledComponentProps, withStyles } from '@material-ui/core';
import { AddCircle, More } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { Fragment } from 'react';
import { ConnectionData, createPaginationContainer, RelayPaginationProp } from 'react-relay';
import deleteTaskMutation from '../../../mutations/deleteTaskMutation';
import Loader from '../../display/Loader';
import { TaskListPagination as TaskListPaginationResponse } from './__generated__/TaskListPagination.graphql';
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
  relay: RelayPaginationProp;
  onAdd(): void;
  onDetails(taskId: string): void;
  onEdit(taskId: string): void;
}

class TaskListPagination extends React.Component<Props> {
  onMore = () => {
    if (!this.props.relay.isLoading()) {
      // TODO when data comes, relay.isLoading is returning true, so we need to render page one more time
      this.forceUpdate();
      this.props.relay.loadMore(PAGE_SIZE, () => {
        this.forceUpdate();
      });
    }
  };

  onDelete = async (id: string): Promise<void> => {
    await deleteTaskMutation({ id, parentID: this.props.data.id });
  };

  render(): React.ReactNode {
    const { classes, data, onAdd, onDetails, onEdit } = this.props;

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
        {edges.map((edge) => edge && edge.node && (
          <TaskListFragment
            key={edge.cursor}
            data={edge.node}
            onDelete={this.onDelete}
            onDetails={onDetails}
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
            onClick={this.onMore}
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
    getVariables(props, { cursor, count }) {
      return {
        count,
        after: cursor,
      };
    },
  },
);
