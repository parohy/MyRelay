import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { View, Text } from 'react-native';

class User extends Component {
  render() {
    const { name, surname, age } = this.props.user;
    return (
      <View style={styles.container}>
        <Text> {name} </Text>
        <Text> {surname} </Text>
        <Text> {age} </Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default createFragmentContainer(
  User,
  graphql`
    fragment UserFragment_user on User {
      name
      surname
      age
    }
  `
);
