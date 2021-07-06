import { createContext } from 'react';
import { Environment } from 'relay-runtime';
import createRelayEnvironment from '../createRelayEnvironment';

const RelayEnvironmentContext = createContext<Environment>(createRelayEnvironment('unauthorised'));

export default RelayEnvironmentContext;
