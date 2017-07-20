import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';
import RelayEnvironment from './api/RelayEnvironment';
import User from './components/User';

const query = graphql`
  query AppQuery {
    users {
      ...UserFragment_user
    }
  }
`;

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <QueryRenderer
          environment={ RelayEnvironment }
          query={ query }
          render={ ({ error, props }) => {
              if(error){
                console.log('Error >>',error);
                return <Text>Something went wrong...</Text>;
              } else if(props){
                console.log(props);
                return (
                  <FlatList
                    data={props.users}
                    renderItem={user => {
                      console.log(user);
                      return this.renderItem(user);
                    }}
                  />
                );
              } else {
                return <Text>Loading...</Text>;
              }
          }}
        />
      </View>
    );
  }

  renderItem({ item }) {
    return <User user={item} />;
  }
}

export default App;
