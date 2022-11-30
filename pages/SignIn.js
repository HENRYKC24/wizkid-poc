import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import logo from "../assets/images/logo.png";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.division}>
          A DIVISION OF FIRST WEST CREDIT UNION
        </Text>
      </View>
      <View style={styles.sectionOne}>
        <Text style={styles.branch}>Branch</Text>

        <View style={styles.select}>
          <Text style={styles.selectBrand}>Select a Branch </Text>
          <Text>
            <MaterialIcons
              style={styles.arrow}
              name="keyboard-arrow-down"
              size={24}
              color="#5dacdd"
            />
          </Text>
        </View>
        <Text style={styles.label}>Login ID / Member Number</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Login ID / Member Number"
        />
      </View>
      <View style={styles.sectionOne}>
        <View style={styles.passwordSection}>
          <Text>
            {true ? (
              <Octicons name="eye" size={24} color="#b22a57" />
            ) : (
              <Octicons name="eye-closed" size={24} color="black" />
            )}{" "}
          </Text>
          <Text style={styles.show}>{true ? "Show" : "Hide"} password</Text>
        </View>

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.textInput} placeholder="password" />
      </View>
      <View style={styles.biometric}>
        <CheckBox style={styles.check} checked={true} />
        <View>
          <Text>Remember me</Text>
          <Text style={styles.text}>
            Keep this option selected if you want to enable QuickView or
            Biometric Login.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 50,
  },
  image: {
    width: "80%",
    // height: 'auto',
  },
  select: {
    // flex: 3,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    width: 150,
    marginBottom: 20,
  },
  passwordSection: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    // marginBottom: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  branch: {
    marginVertical: 20,
  },
  selectBrand: {
    marginRight: 30,
  },
  check: {
    margin: 60,
    padding: 0,
  },
  biometric: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 10,
    width: '90%'
  },
  arrow: {
    paddingTop: -30,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 0,
  },
  label: {
    marginBottom: 15,
  },
  show: {
    color: "#b22a57",
  },
  division: {
    fontWeight: "700",
    fontSize: 10,
    textAlign: "center",
    color: "#113666",
  },
  sectionTwo: {
    justifyContent: "center",
    alignItems: "center",
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
