import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { Router, Scene} from 'react-native-router-flux';

import LoadingScene from './scenes/LoadingScene';
import AuthScene from './scenes/AuthScene';
import product from "./scenes/FormProduct";

class App extends Component {

  render() {
    console.log("Entro");
    return (
      <Router>
        <Scene key="root">
          <Scene key="product" component={product} title="Products"></Scene>
        </Scene>
      </Router>
    )
  }
}
export default App;
