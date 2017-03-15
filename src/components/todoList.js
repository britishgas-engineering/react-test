import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TodoList extends Component {
  render() {
    const todoList = this.props.todos.map((item) => {
      return (
        <Text style={styles.todos}>
        {item.text}
        </Text>
      );
    });

    return (
      <View>{todoList}</View>
    )
  }
}

const styles = StyleSheet.create({
  todos: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'space-around',
    height: 20
  }
});
