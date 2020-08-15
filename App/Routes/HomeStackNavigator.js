import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DrawerMenuButton from "../Components/DrawerMenuButton";
import HomeTabNavigator from "./HomeTabNavigator";
import Details from "../Screens/Home/Details";

const HomeStack = createStackNavigator();

export default class HomeStackNavigator extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
  }

  render() {
    return (
      <HomeStack.Navigator initialRouteName="HomeRoute" >
        <HomeStack.Screen
          name="HomeRoute"
          component={HomeTabNavigator}
          options={{
            title: 'Home Screen',
            headerTitleAlign: 'center',
            headerTitleStyle:{
              fontWeight:'bold'
            },
            headerLeft: () => <DrawerMenuButton {...this.props} />,
          }}
        />
        <HomeStack.Screen name="DetailsRoute" component={Details} />
      </HomeStack.Navigator>
    );
  }
}
