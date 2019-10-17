import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

// eslint-disable-next-line no-undef
const GRAPHQL_API_HOST = process.env.REACT_APP_GRAPHQL_HOST || `/graphql`;

const fetchQuery: FetchFunction = (operation, variables) => {
  const opts = {
    credentials: 'include',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  };
  return (
    // @ts-ignore
    fetch(GRAPHQL_API_HOST, opts)
      // @ts-ignore
      .then(response => response.json())
      // @ts-ignore
      .then(json => {
        if (json && json.errors) {
          json.errors.forEach((error: Error) => {
            console.error(error.message);
          });
        }

        return json;
      })
  );
};

const network = Network.create(fetchQuery);
const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store,
});
