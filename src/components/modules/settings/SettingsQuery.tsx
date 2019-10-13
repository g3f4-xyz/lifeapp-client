import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/error-boundary/ErrorBoundary';
import Loader from '../../display/loader/Loader';
import { SettingsQuery as ISettingsQuery } from './__generated__/SettingsQuery.graphql';
import SettingsFragment from './fragment/SettingsFragment';

const SettingsQuery: FC = props => (
  <ErrorBoundary>
    <QueryRenderer<ISettingsQuery>
      variables={{
        count: ITEMS_PER_PAGE * 10,
      }}
      environment={environment}
      query={graphql`
        query SettingsQuery($count: Int!, $after: String) {
          app {
            settings {
              id
              ...SettingsFragment_data
            }
          }
        }
      `}
      render={response => {
        if (response.error) {
          return <div>{JSON.stringify(response.error)}</div>;
        } else if (response.props && response.props.app.settings) {
          return <SettingsFragment data={response.props.app.settings} {...props} />;
        }

        return <Loader />;
      }}
    />
  </ErrorBoundary>
);

export default SettingsQuery;
