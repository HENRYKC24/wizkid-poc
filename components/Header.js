import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import profilePic from "../assets/images/profile_pic.jpg";
import coin from "../assets/images/coin.png";
import back from "../assets/images/back.png";
import settings from "../assets/images/settings.png";

const Header = ({ navigation, showSettings }) => {
  const [activeTab, setActiveTab] = useState("spending");
  return (
    <View style={styles.container}>
      <View style={styles.imageCoin}>
        <TouchableOpacity>
          <Image source={profilePic} style={styles.profile} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.coinValue}>
            <Image source={coin} />
            <Text style={styles.amount}>80K</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.spendSave}>
        <TouchableOpacity onPress={() => setActiveTab("spending")}>
          <Text
            style={[
              styles.spend,
              activeTab === "spending" ? styles.active : "",
            ]}
          >
            Spending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("saving")}>
          <Text style={[activeTab === "saving" ? styles.active : ""]}>
            Saving
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.backSettings}>
        <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
          <Image style={styles.back} source={back} />
        </TouchableOpacity>
        {showSettings ? (
          <TouchableOpacity>
            <Image style={styles.settings} source={settings} />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    position: "static",
    zIndex: 2,
    paddingBottom: 20,
  },
  active: {
    fontWeight: "700",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    color: "#000",
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  imageCoin: {
    marginBottom: -20,
  },
  coinValue: {
    flexDirection: "row",
  },
  amount: {
    fontWeight: "800",
    color: "#888",
  },
  spendSave: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  spend: {
    marginRight: 20,
  },
  backSettings: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  back: {
    marginBottom: 15,
  },
  settings: {
    marginLeft: 8,
  },
});
