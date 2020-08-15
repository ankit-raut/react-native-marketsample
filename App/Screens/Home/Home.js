import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { homeStyles } from "../../Constants/Styles";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={homeStyles.rootView}>
        <Text>TEsting from New Home edited from Github</Text>
        <Button
          title={"Details"}
          onPress={() => {
            this.props.navigation.navigate("DetailsRoute");
          }}
        ></Button>
      </View>
    );
  }
}

export default Home;
