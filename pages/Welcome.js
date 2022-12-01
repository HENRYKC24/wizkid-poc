import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import rotate from "../assets/images/rotate.png";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionOne}>
        <Image style={styles.image} source={rotate} />
        <Text style={styles.path}>Your Path to Financial Wisdom</Text>
      </View>
      <View style={styles.sectionTwo}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.button}>GET STARTED</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={styles.touchable}
        >
          <Text style={styles.button}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  sectionOne: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100,
  },
  image: {
    width: 165,
    height: 160,
  },
  path: {
    fontWeight: "700",
    fontSize: 36,
    textAlign: "center",
  },
  sectionTwo: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  touchable: {
    width: "100%",
  },
  button: {
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: "stretch",
    // flex: 1,
    width: "100%",
    height: 50,
    marginBottom: 51,
    flexDirection: "row",
    textAlign: "center",
    lineHeight: 50,
    fontWeight: "900",
    fontSize: 20,
  },
});
