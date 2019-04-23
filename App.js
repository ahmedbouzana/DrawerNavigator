/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import {Home} from './app/components/Home'
import {Dashboard} from './app/components/Dashboard'


class App extends Component {
  render() {
    return (
      <AppStack/>
    );
  }
}

const AppStack = DrawerNavigator({
  home: {screen:Home},
  dashboard:{screen: Dashboard}
})

export default App