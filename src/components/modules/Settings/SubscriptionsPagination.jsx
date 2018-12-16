import React from 'react';
import PropTypes from 'prop-types';
import { createPaginationContainer, graphql } from 'react-relay';
import List from '@material-ui/core/List/List';

import SubscriptionFragment from './SubscriptionFragment';

class SubscriptionsPagination extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object,
    onDelete: PropTypes.func,
  };

  render() {
    const { className, data, onDelete, onTest } = this.props;
    const { subscriptions: { edges } }  = data || { subscriptions: { edges: [] } };

    return (
      <List className={className}>
      {edges.map(({ node }, key) => (
        <SubscriptionFragment key={key} data={node} onDelete={onDelete} onTest={onTest} />
      ))}
      </List>
    );
  }
}

export default createPaginationContainer(
  SubscriptionsPagination,
  graphql`
    fragment SubscriptionsPagination on NotificationsType
    @argumentDefinitions(
        count: { type: "Int", defaultValue: 999 }
        cursor: { type: "String" }
#        cursor: { type: "ID" }
#        GraphQLParser: Variable \`$cursor\` was defined as type \`ID\`, but used in a location that expects type \`String\`. Source: document \`TaskListPagination\` file: \`modules/TaskList/TaskListPagination.jsx\`.
#        orderby: {type: "[FriendsOrdering]", defaultValue: [DATE_ADDED]}
    )
    {
      id
      subscriptions (
        first: $count
        after: $cursor
      ) @connection(key: "Notifications_subscriptions") {
        edges {
          node {
            ...SubscriptionFragment
          }
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
      query SubscriptionsPaginationQuery (
        $count: Int!
        $cursor: String
      ) {
        app {
          settings {
            notifications {
              ...SubscriptionsPagination
            }
          }
        }
      }
    `,
  }
);
