import React, { Component } from "react";
import {
  View,
  StatusBar,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer, Title, Caption, IconButton } from "react-native-paper";
import { Avatar } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

class CustomDrawer extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
  }
  render() {
    return (
      <View style={{ flex: 1, marginLeft: 10 }}>
        <View style={{ marginTop: StatusBar.currentHeight + 20 }}>
          <TouchableWithoutFeedback
            onPress={() => {
              console.log("Clicked on Profile");
            }}
          >
            <View style={{ flexDirection: "row", margin: 10 }}>
              <Avatar.Image
                size={90}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                }}
              />
              <View style={{ marginLeft: 10, alignSelf: "center" }}>
                <Title>Ankit Raut</Title>
                <Caption>ankitpraut@gmail.com</Caption>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <DrawerContentScrollView>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Home"
            onPress={() => {
              this.props.navigation.navigate("HomeTabRoute");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              this.props.navigation.navigate("Profile");
            }}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="bookmark-outline" color={color} size={size} />
            )}
            label="Bookmarks"
            onPress={() => {
              this.props.navigation.navigate("DetailsRoute");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="settings-outline" color={color} size={size} />
            )}
            label="Settings"
            onPress={() => {
              this.props.navigation.navigate("SettingScreen");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-check-outline" color={color} size={size} />
            )}
            label="Support"
            onPress={() => {
              this.props.navigation.navigate("SupportScreen");
            }}
          />
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => {
              // signOut();
            }}
          />
        </Drawer.Section>
      </View>
    );
  }
}

export default CustomDrawer;

const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
