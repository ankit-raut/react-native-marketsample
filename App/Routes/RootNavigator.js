import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileStackNavigator from "./ProfileStackNavigator";
import HomeStackNavigator from "./HomeStackNavigator";
import CustomDrawer from "./CustomDrawer";
import StartUpStackNavigator from "./StartUpStackNavigator";

const Drawer = createDrawerNavigator();

export default class RootNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
      type: "",
    };
  }
  render() {
    return (
      <NavigationContainer>
        <StartUpStackNavigator></StartUpStackNavigator>
        {/* <Drawer.Navigator
          initialRouteName="HomeStackNavigator"
          drawerContent={(props) => <CustomDrawer {...props} />}
          drawerStyle={{ width: "70%" }}
        >
          <Drawer.Screen
            name="HomeStackNavigator"
            component={HomeStackNavigator}
          />
          <Drawer.Screen
            name="ProfileStackRoute"
            component={ProfileStackNavigator}
          />
        </Drawer.Navigator> */}
      </NavigationContainer>
    );
  }
}
