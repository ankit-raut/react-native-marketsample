import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { homeStyles } from "../../Constants/Styles";

class Trending extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={homeStyles.rootView}>
        <Text>TEsting from All Category</Text>
      </View>
    );
  }
}

export default Trending;
