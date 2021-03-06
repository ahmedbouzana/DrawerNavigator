/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";
import Home from "@components/Home";
import Dashboard from "@components/Dashboard";
import Sidebar from "@components/Sidebar";

class App extends Component {
  render() {
    return <AppStack />;
  }
}

const AppStack = DrawerNavigator(
  {
    home: { screen: Home },
    dashboard: { screen: Dashboard }
  },
  {
    contentComponent: ({navigation}) => <Sidebar navigation={navigation}/>
  }
);

export default App;
