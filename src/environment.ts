import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

// eslint-disable-next-line no-undef
const GRAPHQL_API_HOST = process.env.REACT_APP_GRAPHQL_HOST || `/graphql`;

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch(GRAPHQL_API_HOST, {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => response.json());
};

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store
});
