import { Environment, FetchFunction, Network, RecordSource, Store } from 'relay-runtime';

// eslint-disable-next-line no-undef
const GRAPHQL_API_HOST = `${process.env.REACT_APP_API_HOST}/graphql`;

export default function (token: string): Environment {
  const fetchQuery: FetchFunction = async (operation, variables) => {
    const opts = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    };
    const response = await fetch(GRAPHQL_API_HOST, opts);
    const json = await response.json();

    if (json && json.errors) {
      json.errors.forEach((error: Error) => {
        console.error(error.message);
      });
    }

    return json;
  };
  const network = Network.create(fetchQuery);
  const source = new RecordSource();
  const store = new Store(source);

  return new Environment({
    network,
    store,
  });
}
