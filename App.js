import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Router, Scene } from 'react-native-router-flux';

import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene';
class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          
          <Scene key="auth" component={AuthScene} hideNavBar={true}></Scene>
        </Scene>
      </Router>
    )
  }
}
export default App;
