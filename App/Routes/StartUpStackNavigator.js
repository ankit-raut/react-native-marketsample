import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";

import SignUp from "../Screens/StartUp/Signup";
import Splash from "../Screens/StartUp/Splash";
import Login from "../Screens/StartUp/Login";

const StartUpStack = createStackNavigator();

export default class StartUpStackNavigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <StartUpStack.Navigator headerMode="none">
          <StartUpStack.Screen  name="SplashUpRoute" component={Splash} />
          <StartUpStack.Screen name="SignUpRoute" component={SignUp} />
          <StartUpStack.Screen name="LoginRoute" component={Login} />
        </StartUpStack.Navigator>
    );
  }
}
