import React, { Component } from "react";
import { View, Text } from "react-native";

import {detailsStyles} from "../../Constants/Styles";

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={detailsStyles.rootView}>
                <Text>Details Page</Text>
            </View>            
        );
    }
}

export default Details;