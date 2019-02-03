// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import { withStyles } from '@material-ui/core';
import React from 'react';
import { createPaginationContainer } from 'react-relay';
import TaskTypeFragment from './TaskTypeFragment';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
};

interface Props {
  classes?: any;
  data: any;
  relay: any;
  onSelect: any;
}

class TaskTypeListPagination extends React.Component<Props> {
  render() {
    const { classes, data: { list: { edges } }, onSelect } = this.props;
    const list = edges.map(({ node }: any): any => node);

    return (
      <div className={classes.container}>
        {[...list]
          .sort(({ order: orderA }, { order: orderB }) => orderA - orderB)
          .map((data: any, key: any): any => (
            <TaskTypeFragment key={key} data={data} onSelect={onSelect}/>
          ))}
      </div>
    );
  }
}

export default createPaginationContainer<Props>(
  // @ts-ignore
  withStyles(styles)(TaskTypeListPagination),
  graphql`
    fragment TaskTypeListPagination on TaskTypeListType
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 10 }
      cursor: { type: "String" }
    )
    {
      id
      list (
        first: $count
        after: $cursor
      ) @connection(key: "TaskTypeList_list") {
        edges {
          node {
            id
            order
            ...TaskTypeFragment
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
      query TaskTypeListPaginationQuery (
      $count: Int!
      $cursor: String
      ) {
        app {
          taskTypeList {
            ...TaskTypeListPagination
          }
        }
      }
    `,
  }
);
