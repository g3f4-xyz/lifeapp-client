import graphql from 'babel-plugin-relay/macro';
import { useLazyLoadQuery } from 'relay-hooks';
import getQueryData from '../../utils/relay/getQueryData';
import { useSettingsQuery } from './__generated__/useSettingsQuery.graphql';

const query = graphql`
  query useSettingsQuery {
    settings {
      ...useSettingsFragment
    }
  }
`;

export default () => getQueryData(useLazyLoadQuery<useSettingsQuery>(query));
