import React, { Component } from "react";
import RootNavigator from "./App/Routes/RootNavigator";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <RootNavigator />;
  }
}
