import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../Screens/Profile/Profile";
import DrawerMenuButton from "../Components/DrawerMenuButton";

const ProfileStack = createStackNavigator();

export default class ProfileStackNavigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ProfileStack.Navigator initialRouteName="HomeRoute">
        <ProfileStack.Screen
          name="ProfileRoute"
          component={Profile}
          options={{
            title: "Profile Screen",
            headerTitleAlign:"center",
            headerLeft: () => <DrawerMenuButton {...this.props} />,
          }}
        />
        {/* <ProfileStack.Screen name="DetailsRoute12" component={Details} /> */}
      </ProfileStack.Navigator>
    );
  }
}
