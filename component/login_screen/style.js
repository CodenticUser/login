import { StyleSheet, Dimensions, Platform } from "react-native";
import { whileStatement } from "@babel/types";
// const {width, height}=Dimensions.get('window');

const styles = StyleSheet.create({
  main_class: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#398AD7"
  },
  top_background_img: {
    width: "100%",
    height: "auto"
  },
  top_background_color: {
    backgroundColor: "rgba(0,0,255,0.5)"
  },
  setting_img: {
    height: 35,
    width: 35,
    marginTop: 40,
    marginRight: 10,
    alignSelf: "flex-end",
    tintColor: "#ffffff"
  },
  logo_img: {
    height: 145,
    width: 150,
    marginTop: -30,
    marginLeft: "30%",
    tintColor: "#ffffff"
  },

  company_name: {
    textAlign: "center",
    fontSize: 25,
    color: "white",
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },
  main_button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 50,
    marginTop: 28,
    width: "100%"
  },
  main_text: {
    justifyContent: "center",
    alignItems: "center",
    width: 210
  },
  text: {
    borderColor: "white",
    borderBottomWidth: 0.5,
    flexDirection: "row"
  },
  text_img: {
    height: 28,
    width: 28,
    marginBottom: 1,
    marginTop: 16,
    tintColor: "white"
  },
  true_img: {
    height: 20,
    width: 20
  },
  text_input: {
    padding: 10,
    fontSize: 17,
    marginTop: 10,
    width: 210,
    color: "white"
  },
  footer_button: {
    ...Platform.select({
      android: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 50
      },
      ios: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 50,
        color: "white"
      }
    }),

    width: "60%",
    marginTop: Platform.OS == "ios" ? 30 : 40,
    justifyContent: "space-between"
  },

  footer_login_button: {
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2,
    width: 230,
    paddingVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.2
  },
  end_button_main: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 150,
    width: "70%"
  },
  end_button: {
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40
  },
  last_button_img: {
    tintColor: "white",
    height: 20,
    width: 20,
    marginLeft: 10
  },
  touchableopacity: {
    height: 40,
    shadowRadius: 10,
    color: "white",
    borderWidth: 0,
    backgroundColor: "white",
    marginTop: 40,
    width: 210,
    alignItems: "center",
    justifyContent: "center",
    color: "#398AD7"
  },
  frogotpassword_text: {
    color: "white",
    fontSize: 18,
    marginTop: 20
  },
  txt: {
    color: "white",
    marginLeft: 10,
    marginRight: 10
  }
});
export default styles;
