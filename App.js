import React, { Component } from "react";
import { Text, View } from "react-native";
//import Login from "./component/login_screen/login";
import Profile from "./component/profile/profile";
//import Homescreen from "./component/navigetor/HomeScreen";
export default class App extends Component {
  render() {
    return (
      <View>
        <Profile />
      </View>
    );
  }
}
