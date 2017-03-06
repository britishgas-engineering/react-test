import 'react-native';
import React from 'react';
import Index from '../index.ios.js';
import renderer from 'react-test-renderer';
import TodoList from '../src/components.todoList'

it('should create a new todo list', () => {

  it.only('renders empty list', () => {
    const todos = [];

    const wrapper = shallow(<TodoList todos={todos} />);
    expect(wrapper.find(Text)).to.have.length(0);
  });

  it.only('renders two <Text /> components', () => {
    const todos = [
      {id: '12345', text: 'work'},
      {id: '54321', text: 'play'}
    ];

    const wrapper = shallow(<TodoList todos={todos} />);
    expect(wrapper.find(Text)).to.have.length(2);
  });

});
