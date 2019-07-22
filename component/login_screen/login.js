import React, { Component } from "react";

import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import Styles from "./style";

export default class Login extends Component {
  render() {
    return (
      <View style={Styles.main_class}>
        <ImageBackground
          source={require("../img/bk.png")}
          style={Styles.top_background_img}
          resizeMode={"stretch"}
        >
          <View style={Styles.top_background_color}>
            <Image
              style={Styles.setting_img}
              source={require("../img/setting.png")}
            />
            <Image
              style={Styles.logo_img}
              source={require("../img/logo.png")}
            />
            <Text style={Styles.company_name}>Company Name</Text>
          </View>
        </ImageBackground>
        <View style={Styles.main_button}>
          <Button title="Login" color="white" />
          <Button title="Register" color="white" />
        </View>

        <View style={Styles.main_text}>
          <View style={Styles.text}>
            <Image
              style={Styles.text_img}
              source={require("../img/email.png")}
            />
            <TextInput
              style={Styles.text_input}
              placeholder="Enter your @gmail.com"
              placeholderTextColor="white"
            />
          </View>
          <View style={Styles.text}>
            <Image
              style={Styles.text_img}
              source={require("../img/pass.png")}
            />
            <TextInput
              style={Styles.text_input}
              placeholder="Enter correct  Password"
              secureTextEntry={true}
              placeholderTextColor="white"
            />
          </View>
        </View>
        <View>
          <Text
            style={Styles.frogotpassword_text}
            onPress={() => this.props.navigation.navigate("Forgotpassword")}
          >
            Forgot your Password?
          </Text>
        </View>
        <View style={Styles.footer_button}>
          <Button
            style={Styles.footer_login_button}
            title="Login"
            color="white"
            onPress={() => this.props.navigation.navigate("Profile")}
          />
        </View>

        <TouchableOpacity style={Styles.touchableopacity}>
          <Text>Use Without Login</Text>
        </TouchableOpacity>

        <View style={Styles.end_button_main}>
          <View>
            <TouchableOpacity style={Styles.end_button}>
              <Image
                style={Styles.last_button_img}
                source={require("../img/facebook.png")}
              />
              <Text style={Styles.txt}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={Styles.end_button}>
              <Image
                style={Styles.last_button_img}
                source={require("../img/google.png")}
              />
              <Text style={Styles.txt}>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
