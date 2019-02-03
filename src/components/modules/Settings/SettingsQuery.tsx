// @ts-ignore
import graphql from 'babel-plugin-relay/macro';
import React, { Component } from 'react';
import { QueryRenderer } from 'react-relay';
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import SettingsFragment from './SettingsFragment';

class SettingsQuery extends Component {
  render() {
    return (
      <ErrorBoundary>
        <QueryRenderer
          variables={{}}
          environment={environment}
          query={graphql`
            query SettingsQuery {
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
            } else if (props) {
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
