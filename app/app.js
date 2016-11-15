/**
 * @flow
 */

import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import LoginReduxFlowjs from './LoginReduxFlowjs';

export default class App extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Provider store={store}>
        <LoginReduxFlowjs />
      </Provider>
    );
  }
}
