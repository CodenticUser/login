import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top_img: {
    height: 300,
    width: "100%"
  },
  top_img_second: {
    height: 200,
    width: 200,
    borderRadius: 200 / 2,
    borderColor: "white",
    borderWidth: 9,
    position: "absolute"
  },

  top_set: {
    alignItems: "center",
    justifyContent: "center"
  },
  profile_img: {
    alignItems: "center",
    justifyContent: "center"
  },
  menu_img: {
    height: 18,
    width: 27,
    marginTop: 50,

    tintColor: "white"
  },
  top_menu: {
    flexDirection: "row",
    justifyContent: "center"
  },
  pro_txt: {
    color: "white",
    fontSize: 22,
    marginTop: 45,
    marginLeft: 30
  },
  right_menu_img: {
    tintColor: "white",
    height: 20,
    width: 20,
    marginTop: 45,
    marginLeft: 30
  },
  search_img: {
    tintColor: "white",
    height: 20,
    width: 20,
    marginTop: 45,
    marginLeft: 130
  },
  name_txt: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginTop: 35
  },
  hobi_txt: {
    color: "white",
    textAlign: "center"
  },

  num_txt: {
    fontSize: 20,
    textAlign: "center"
  },
  center_txt: {
    marginTop: 5,
    color: "gray",
    textAlign: "center"
  },
  space_btn1: {
    width: "32%",
    marginLeft: 30
  },
  space_btn2: {
    width: "32%",
    marginLeft: 30
  },
  space_btn3: {
    width: "32%",
    marginLeft: 30
  },
  center_main: {
    flexDirection: "row",
    width: "70%",
    marginTop: 120
  },
  btn: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  following_btn: {
    backgroundColor: "#43b547",
    height: 40,
    width: 230,
    borderRadius: 3
  },
  btn_txt: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginTop: 6
  },
  space: {
    height: 3,
    backgroundColor: "lightgray",
    width: "100%",
    marginTop: 30
  },
  end_detail: {
    flexDirection: "row"
  },
  bottom_img: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    marginTop: 10,
    marginLeft: 10
  },
  end_name: {
    marginTop: 20,
    marginLeft: 5
  },
  view_img: {
    height: 20,
    width: 20,
    marginTop: 35,
    marginLeft: -60
  },
  view_num: {
    marginTop: 36,
    marginLeft: 5,
    color: "#36393d"
  },
  time: {
    marginLeft: 170
  },
  time_img: {
    height: 14,
    width: 14,
    marginTop: 40
  },
  time_text: {
    color: "lightgray"
  },
  tm_txt: {
    marginLeft: 20,
    marginTop: -15
  },
  footer_txt: {
    color: "#36393d"
  },
  footer: {
    paddingHorizontal: 10,
    marginTop: 10
  },
  end_img: {
    width: "100%",
    marginTop: 5
  },
  chat_img: {
    height: 50,
    width: 50,
    position: "absolute",
    marginLeft: 315,
    marginTop: 70
  },
  time_txt: {
    color: "gray"
  }
});
export default styles;
