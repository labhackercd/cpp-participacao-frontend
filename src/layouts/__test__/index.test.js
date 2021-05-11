import React from 'react';
import { mount } from 'enzyme';
import MockTheme from './mocks/mockTheme';
import Layout from '../index';

test('Snapshot Layout page should not have changes', () => {
  const component = mount(<MockTheme><Layout /></MockTheme>);
  expect(component.exists()).toEqual(true);
  expect(component).toMatchSnapshot();
});