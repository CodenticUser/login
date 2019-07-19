import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import styles from "./style";

export default class forgotpassword extends Component {
  render() {
    return (
      <View>
        <View style={styles.top_set}>
          <ImageBackground
            style={styles.top_img}
            source={require("../img/msd.png")}
          >
            <View style={styles.top_menu}>
              <Image
                style={styles.menu_img}
                source={require("../img/menu.png")}
              />
              <Text style={styles.pro_txt}>Profile</Text>
              <Image
                style={styles.search_img}
                source={require("../img/search.png")}
              />
              <Image
                style={styles.right_menu_img}
                source={require("../img/right_menu.png")}
              />
            </View>
            <Text style={styles.name_txt}>MS Dhoni</Text>
            <Text style={styles.hobi_txt}>Cricketer</Text>

            {/* <View style={styles.profile_img} /> */}
          </ImageBackground>
        </View>
        <View style={styles.profile_img}>
          <Image
            style={styles.top_img_second}
            source={require("../img/msd1.png")}
          />
        </View>
        <View style={styles.center_main}>
          <TouchableOpacity style={styles.space_btn1}>
            <Text style={styles.num_txt}>421</Text>
            <Text style={styles.center_txt}>POSTS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.space_btn2}>
            <Text style={styles.num_txt}>7589</Text>
            <Text style={styles.center_txt}>FOLLOWERS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.space_btn3}>
            <Text style={styles.num_txt}>563</Text>
            <Text style={styles.center_txt}>FOLLOWING</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.following_btn}>
            <Text style={styles.btn_txt}>Following</Text>
          </TouchableOpacity>
          <View style={styles.space} />
        </View>
        <View style={styles.end_detail}>
          <Image
            style={styles.bottom_img}
            source={require("../img/msd1.png")}
          />
          <Text style={styles.end_name}> MS Dhoni</Text>
          <Image style={styles.view_img} source={require("../img/view.png")} />
          <Text style={styles.view_num}>15</Text>
          <View style={styles.time}>
            <Image
              style={styles.time_img}
              source={require("../img/time.png")}
            />
            <View style={styles.tm_txt}>
              <Text style={styles.time_txt}>11:57 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footer_txt}>
            Find Live Cricket Scores, Match updates, Fixtures Results, News,
            Articles, Video .
          </Text>

          <Image style={styles.end_img} source={require("../img/end.png")} />
          <Image style={styles.chat_img} source={require("../img/chat.png")} />
        </View>
      </View>
    );
  }
}
