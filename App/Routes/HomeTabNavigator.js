import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "../Screens/Home/Home";
import AllCategory from "../Screens/Home/AllCategory";
import Trending from "../Screens/Home/Trending";
import Videos from "../Screens/Home/Videos";

import { IconButton } from "react-native-paper";

const HomeBottomTab = createMaterialBottomTabNavigator();

export default class HomeTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <HomeBottomTab.Navigator initialRouteName="HomeRoute">
        <HomeBottomTab.Screen
          name="HomeTabRoute"
          component={Home}
          options={{
            tabBarLabel: "Home Screen",
            tabBarColor: "tomato",
            tabBarIcon: () => (
              <IconButton
                icon="home"
                size={25}
                onPress={() => {
                  this.props.navigation.navigate("HomeRoute");
                }}
              />
            ),
          }}
        />
        <HomeBottomTab.Screen
          name="CategoryRoute"
          component={AllCategory}
          options={{
            tabBarLabel: "Category Screen",
            tabBarColor: "pink",
            tabBarIcon: () => (
              <IconButton
                icon="card-text"
                size={25}
                onPress={() => {
                  this.props.navigation.navigate("HomeRoute");
                }}
              />
            ),
          }}
        />
        <HomeBottomTab.Screen
          name="TrendingRoute"
          component={Trending}
          options={{
            tabBarLabel: "Trending Screen",
            tabBarColor: "grey",
            tabBarIcon: () => (
              <IconButton
                icon="trending-up"
                size={25}
                onPress={() => {
                  this.props.navigation.navigate("HomeRoute");
                }}
              />
            ),
          }}
        />
        <HomeBottomTab.Screen
          name="VideoRoute"
          component={Videos}
          options={{
            tabBarLabel: "Video Screen",
            tabBarColor: "orange",
            tabBarIcon: () => (
              <IconButton
                icon="video-switch"
                size={25}
                onPress={() => {
                  this.props.navigation.navigate("HomeRoute");
                }}
              />
            ),
          }}
        />
      </HomeBottomTab.Navigator>
    );
  }
}
