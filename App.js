import React, { Component } from "react";
import { View } from "react-native";
import Login from "./component/login_screen/Login";
import Profile from "./component/Profile/Profile";
import Forgotpassword from "./component/forgotpassword/Forgotpassword";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Following from "./component/following/Following";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
    },
    Forgotpassword: {
      screen: Forgotpassword,
      navigationOptions: {
        header: null
      }
    },
    Following: {
      screen: Following,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
