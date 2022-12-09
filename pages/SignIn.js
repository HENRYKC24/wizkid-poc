import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

import logo from "../assets/images/logo.png";
const branches = ["Branch A", "Branch B", "Branch C", "Branch D"];

const SignIn = ({ navigation }) => {
  const [showBranches, setShowBranches] = useState(false);
  const [branch, setBranch] = useState("Select a Branch");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(() =>
    "X".repeat(password.length)
  );
  const [showPassword, setShowPassword] = useState(false);
  const [ID, setID] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  return (
    <View onPress={() => setShowBranches(false)} style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.division}>
          A DIVISION OF FIRST WEST CREDIT UNION
        </Text>
      </View>
      <View>
        <Text style={styles.branch}>Branch</Text>

        <TouchableOpacity onPress={() => setShowBranches((prev) => !prev)}>
          <View style={styles.select}>
            <Text style={styles.selectBrand}>{branch}</Text>
            <Text>
              <MaterialIcons
                style={styles.arrow}
                name={`keyboard-arrow-${showBranches ? "up" : "down"}`}
                size={24}
                color="#5dacdd"
              />
            </Text>
          </View>
        </TouchableOpacity>
        {showBranches && (
          <ScrollView style={styles.branchListContainer}>
            {branches.map((br) => (
              <Text
                key={br}
                onPress={(e) => {
                  e.stopPropagation();
                  setShowBranches(false);
                  setBranch(br);
                }}
                style={styles.branchList}
              >
                {br}
              </Text>
            ))}
          </ScrollView>
        )}
        <Text style={styles.label}>Login ID / Member Number</Text>
        <TextInput
          editable={!showBranches}
          selectTextOnFocus={!showBranches}
          onChangeText={(text) => setID(text)}
          value={ID}
          style={styles.textInput}
          placeholder="Login ID / Member Number"
        />
      </View>
      <View>
        <View style={styles.passwordSection}>
          <Text>
            {showPassword ? (
              <Octicons name="eye-closed" size={24} color="green" />
            ) : (
              <Octicons name="eye" size={24} color="#b22a57" />
            )}{" "}
          </Text>
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Text style={{ color: showPassword ? "green" : "#b22a57" }}>
              {showPassword ? "Hide" : "Show"} password
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Password</Text>
        {showPassword ? (
          <TextInput
            editable={!showBranches}
            selectTextOnFocus={!showBranches}
            onChangeText={(text) => {
              setPassword(text);
              setHiddenPassword("X".repeat(text.length));
            }}
            value={password}
            style={styles.textInput}
            placeholder="password"
          />
        ) : (
          <TextInput
            editable={!showBranches}
            selectTextOnFocus={!showBranches}
            onChangeText={(text) => {
              if (text.length > password.length) {
                const added = text.slice(text.length - 1);
                const passwordArray = password.split("");
                passwordArray.push(added);
                setPassword(passwordArray.join(""));
                setHiddenPassword("X".repeat(passwordArray.join("").length));
              }
              if (text.length < password.length) {
                const passwordArray = password.split("");
                passwordArray.pop();
                setPassword(passwordArray.join(""));
                setHiddenPassword("X".repeat(passwordArray.join("").length));
              }
            }}
            value={hiddenPassword}
            style={styles.textInput}
            placeholder="password"
          />
        )}
      </View>
      <View style={styles.biometric}>
        <CheckBox
          onPress={() => setRememberMe((prev) => !prev)}
          containerStyle={styles.check}
          style={styles.check}
          checked={rememberMe}
          checkedColor="green"
        />
        <View>
          <Text style={styles.remember}>Remember me</Text>
          <Text style={styles.text}>
            Keep this option selected if you want to enable QuickView or
            Biometric Login.
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() =>
            ID &&
            password &&
            branch &&
            branch !== "Select a Branch" &&
            navigation.navigate("Birthday18")
          }
        >
          <Text
            style={[
              styles.login,
              {
                backgroundColor:
                  ID && password && branch && branch !== "Select a Branch"
                    ? "#0a0"
                    : "#acabac",
              },
            ]}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
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
    marginTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 50,
  },
  image: {
    width: "80%",
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#5dacdd",
    maxWidth: 120,
    marginBottom: 20,
  },
  passwordSection: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    marginVertical: 10,
    alignSelf: "flex-end",
  },
  branch: {
    marginVertical: 20,
    color: "#3f3f3f",
  },
  branchListContainer: {
    position: "absolute",
    marginTop: 90,
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: 100,
    maxHeight: 200,
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  branchList: {
    color: "#`3f3f3f",
    width: "100%",
    height: 50,
    lineHeight: 20,
    textAlign: "center",
  },
  text: {
    color: "#3f3f3f",
  },
  selectBrand: {
    marginRight: 5,
    color: "#3f3f3f",
  },
  check: {
    marginBottom: 30,
    marginLeft: 0,
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  biometric: {
    flexDirection: "row",
    alignItems: "flex-end",
    padding: 0,
    margin: 0,
    width: "90%",
    marginTop: 10,
  },
  remember: {
    fontWeight: "700",
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
    color: "#3f3f3f",
  },
  division: {
    fontWeight: "700",
    fontSize: 10,
    textAlign: "center",
    color: "#113666",
  },
  button: {
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: "stretch",
    width: "100%",
    height: 50,
    marginBottom: 51,
    flexDirection: "row",
    textAlign: "center",
    lineHeight: 50,
    fontWeight: "900",
    fontSize: 20,
  },
  login: {
    color: "#fff",
    textAlign: "center",
    height: 50,
    lineHeight: 50,
    fontSize: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  forgot: {
    textAlign: "center",
    fontWeight: "500",
    color: "#6d7893",
  },
});
