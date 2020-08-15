import React, { Component } from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";

class DrawerMenuButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <IconButton
          icon="menu"
          size={25}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        />
      </View>
    );
  }
}

export default DrawerMenuButton;
