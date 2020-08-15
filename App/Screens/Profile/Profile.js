import React, { Component } from "react";
import { View, Text } from "react-native";

import { detailsStyles } from "../../Constants/Styles";
import { IconButton } from "react-native-paper";

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={detailsStyles.rootView}>
        <View>
          <IconButton
            icon="menu"
            size={25}
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          />
        </View>
        <Text>Profile Page</Text>
      </View>
    );
  }
}

export default Profile;
