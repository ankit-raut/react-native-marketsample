import React, { Component } from "react";
import { View } from "react-native-animatable";
import { Text, Title, TextInput } from "react-native-paper";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperView}>
          <Animatable.View
            style={{ flex: 2, alignSelf: "flex-end", alignItems: "center" }}
            animation="fadeInUpBig"
            duration={1500}
          >
            <Text style={styles.title}>Welcome</Text>
          </Animatable.View>
          <Animatable.View
            style={{ flex: 1, alignItems: "center" }}
            animation="bounceIn"
            duration={3000}
          >
            <Image
              width={20}
              height={20}
              resizeMode="center"
              source={require("../../../assets/icon.png")}
            />
          </Animatable.View>
        </View>
        <Animatable.View
          animation="fadeInUpBig"
          duration={1500}
          style={styles.lowerView}
        >
          <View>
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.action}>
              <FontAwesome
                name="user-o"
                size={20}
                style={{ alignSelf: "center", color: "#43A047" }}
              />
              <TextInput
                label="User Name"
                mode="outlined"
                style={styles.textInput}
              />
              <Feather
                name="check-circle"
                color="green"
                size={20}
                style={{ alignSelf: "center", color: "#43A047" }}
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.action}>
              <FontAwesome
                name="lock"
                size={20}
                style={{ alignSelf: "center", color: "#43A047" }}
              />
              <TextInput
                label="Password"
                mode="outlined"
                style={styles.textInput}
                secureTextEntry={true}
              />
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                style={{ alignSelf: "center", color: "#43A047" }}
              />
            </View>
          </View>
          

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginRoute")}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Login</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("SignUpRoute")}
            >
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Sign Up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43A047",
  },
  upperView: { flex: 1, alignItems: "center", flexDirection: "row" },
  lowerView: {
    flex: 2,
    backgroundColor: "#E0E0E0",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: "20%",
    height: "20%",
  },
  title: {
    color: "#E0E0E0",
    fontSize: 45,
    fontWeight: "bold",
    paddingBottom:20,
    paddingRight:20
  },
  text_footer: {
    color: "#43A047",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#43A047",
  },
  button: {
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
