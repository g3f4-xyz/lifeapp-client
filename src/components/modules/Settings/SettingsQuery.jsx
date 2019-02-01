import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../../../environment';
import ErrorBoundary from '../../containers/ErrorBoundary';
import Loader from '../../display/Loader';
import SettingsFragment from './SettingsFragment';

class SettingsQuery extends Component {
  render() {
    console.log(['SettingsQuery:render'], this.props);
    return (
      <ErrorBoundary>
        <QueryRenderer
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
          render={({error, props}) => {
            if (error) {
              return <div>{JSON.stringify(error)}</div>;
            } else if (props) {
              return (
                <SettingsFragment data={props.app.settings} {...this.props} />
              );
            }
            return (
              <Loader />
            );
          }}
        />
      </ErrorBoundary>
    );
  }
}

export default SettingsQuery;
