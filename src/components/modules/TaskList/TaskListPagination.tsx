import { IconButton, withStyles } from '@material-ui/core';
import { AddCircle, More } from '@material-ui/icons';
// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { Fragment } from 'react';
import { createPaginationContainer } from 'react-relay';
import deleteTaskMutation from '../../../mutations/deleteTaskMutation';
import Loader from '../../display/Loader';
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

interface Props {
  classes?: any;
  data: any;
  onAdd: any;
  onMore: any;
  onDetails: any;
  onEdit: any;
  relay: any;
}

class TaskListPagination extends React.Component<Props> {
  onMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(PAGE_SIZE, () => { // #FIXIT
      this.forceUpdate(); // when data comes, relay.isLoading is returning true, so we need to render page one more time
    });

    this.forceUpdate(); // initializing loadMore doesn't invoke rendering DOM. To change moreIcon to loader we need to render page
  };

  onDelete = async (id: any): Promise<void> => {
    await deleteTaskMutation({ id, parentID: this.props.data.id });
  };

  render(): React.ReactNode {
    const { classes, data, onAdd, onDetails, onEdit } = this.props;
    const { list: { edges, pageInfo } } = data || { list: { edges: [], pageInfo: {} } };
    const tasks = edges.map(({ node }: any): any => node);

    return (
      <Fragment>
        {tasks.map((data: any) => (
          <TaskListFragment
            key={data.id}
            data={data}
            onDelete={(id: any): any => this.onDelete(id)}
            onDetails={onDetails}
            onEdit={onEdit}
          />
        ))}
        <IconButton
          className={classes.addButton}
          color="primary"
          onClick={onAdd}
        >
          <AddCircle className={classes.addButtonIcon}/>
        </IconButton>
        {pageInfo.hasNextPage && (this.props.relay.hasMore() && !this.props.relay.isLoading() ? (
          <IconButton
            className={classes.moreButton}
            color="primary"
            onClick={this.onMore}
          >
            <More className={classes.moreButtonIcon}/>
          </IconButton>
        ) : (
          <Loader/>
        ))}
      </Fragment>
    );
  }
}

export default createPaginationContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TaskListPagination),
  graphql`
    fragment TaskListPagination on TaskListType
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "String" }
    )
    {
      id
      list (
        first: $count
        after: $cursor
      ) @connection(key: "TaskList_list") {
        edges {
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
    getConnectionFromProps(props) {
      return props.data && props.data.list;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, { count, cursor }) {
      return { count, cursor };
    },
    query: graphql`
      query TaskListPaginationQuery (
      $count: Int!
      $cursor: String
      ) {
        app {
          taskList {
            ...TaskListPagination
          }
        }
      }
    `,
  }
);
