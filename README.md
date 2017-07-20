# Description
This is a training project following various tutorials.
It is a wrap of latest technologies working with:
- [Nodejs](https://nodejs.org)
- Firebase [functions](https://firebase.google.com/docs/functions/) and [database](https://firebase.google.com/docs/database/)
- [GraphQL](http://graphql.org/)
- [react-native](https://facebook.github.io/react-native/)
- [Relay]((https://facebook.github.io/relay/))

### Functionality
Its a nodejs server with GraphQL endpoint set up to run on firebase cloud functions
following a simple custom graphql schema of users and connections between them.
The functions read data from the firebase database and sends them back based on the requested query. 
The server supports GraphiQL dashboard to view schema and test queries. You can also make POST request on the endpoint.
- **GraphiQL endpoint:**
`https://us-central1-fir-functions-example-5efdb.cloudfunctions.net/api/graphiql`
- **GraphQL endpoint:**
`https://us-central1-fir-functions-example-5efdb.cloudfunctions.net/api/graphql`

#### Mobile application
Mobile application is in the app folder. ***Its a work in progress!***. Hockeyapp public link will be provided later for iOS and Android build as well. The mobile application is using Relay as bridge.

##### Current API capabilities
1. List all users
2. List single user based on ID
3. Create a new user
4. Create friend connection between users

##### Future
- Extend API by more fuctionality
- Create a simple react-native application to interact with the API
- Create reactjs web application to interact with the API