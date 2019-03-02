// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import { SettingsQuery as ISettingsQuery } from './__generated__/SettingsQuery.graphql';
import SettingsFragment from './SettingsFragment';

class SettingsQuery extends Component {
  render(): React.ReactNode {
    return (
      <ErrorBoundary>
        <QueryRenderer<ISettingsQuery>
          variables={{
            count: ITEMS_PER_PAGE * 10,
          }}
          environment={environment}
          query={graphql`
            query SettingsQuery(
              $count: Int!,
              $after: String
            ) {
              app {
                settings {
                  id
                  ...SettingsFragment
                }
              }
            }
          `}
          render={({ error, props }) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
            } else if (props && props.app.settings) {
              return (
                <SettingsFragment data={props.app.settings} {...this.props} />
              );
            }

            return (
              <Loader/>
            );
          }}
        />
      </ErrorBoundary>
    );
  }
}

export default SettingsQuery;
