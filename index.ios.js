import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import TodoList from './src/components/todoList'

export default class reactTest extends Component {
  addTodo(text) {
    this.setState({text: text})
  }

  render() {
    const todos = [
      {id: '12345', text: 'work'},
      {id: '54321', text: 'play'}
    ];

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.addTodoInput}
          placeholder="Type here to translate!"
          onSumbitEditing={(text) => this.addTodo.bind(this)}
        />
        <TodoList todos={todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  addTodoInput: {
    flex: 1,
    top: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 40,
    borderColor: 'black'
  },
  todos: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'space-around',
    height: 20
  }
});

AppRegistry.registerComponent('reactTest', () => reactTest);
