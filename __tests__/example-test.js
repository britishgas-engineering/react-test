import 'react-native';
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

/*
* Integration tests are used to ensure the
* components render and visually function as
* expected.
*/

const ObjectToTest = ({foo, bar}) => <h1>{`${foo} : ${bar}`}</h1>;

it('objectToTest renders as expected', () => {
  const component = shallow(
    <ObjectToTest foo='bar' bar='foo' />
  );
  expect(component.text()).toEqual('bar : foo');
});
