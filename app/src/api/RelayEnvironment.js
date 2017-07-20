import {
  Environment,
  Network,
  Store,
  RecordSource
} from 'relay-runtime';

const fetchQuery = (operation, variables, cacheConfig, uploadables) => {
  return (
    fetch('https://us-central1-fir-functions-example-5efdb.cloudfunctions.net/api/graphql', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          query: operation.text,
          variables
        }),
      })
      .then(response => {
        const data = response.json();
        return data;
      })
      .catch( err => console.log(err) )
  );
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);
const handlerProvider = null;

export default RelayEnvironment = new Environment({
  network,
  store,
});
