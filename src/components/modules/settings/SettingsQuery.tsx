import graphql from 'babel-plugin-relay/macro';
import React, { useContext } from 'react';
import { QueryRenderer } from 'react-relay';
import { ITEMS_PER_PAGE } from '../../../constans';
import ErrorBoundary from '../../containers/error-boundary/ErrorBoundary';
import Loader from '../../display/loader/Loader';
import { SettingsQuery as ISettingsQuery } from './__generated__/SettingsQuery.graphql';
import SettingsFragment from './fragment/SettingsFragment';
import RelayEnvironmentContext from '../../../contexts/RelayEnvironmentContext';

function SettingsQuery() {
  const environment = useContext(RelayEnvironmentContext);

  return (
    <ErrorBoundary>
      <QueryRenderer<ISettingsQuery>
        variables={{
          count: ITEMS_PER_PAGE * 10,
        }}
        environment={environment}
        query={graphql`
          query SettingsQuery($count: Int!, $after: String) {
            settings {
              ...SettingsFragment_data
            }
          }
        `}
        render={response => {
          if (response.error) {
            return <div>{JSON.stringify(response.error)}</div>;
          } else if (response.props && response.props.settings) {
            return <SettingsFragment data={response.props.settings} />;
          }

          return <Loader />;
        }}
      />
    </ErrorBoundary>
  );
}

export default SettingsQuery;
