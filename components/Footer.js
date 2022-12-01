import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import handDollar from "../assets/images/hand_dollar.png";
import handPeople from "../assets/images/hand_people.png";
import lightBulb from "../assets/images/light_bulb.png";
import people from "../assets/images/people.png";

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.group}>
          <Image style={styles.handDollar} source={handDollar} />
          <Text style={styles.baseText}>Earn</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.group}>
          <Image style={styles.people} source={people} />
          <Text style={[styles.baseText, styles.share]}>Share</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.group}>
          <Image style={styles.lightBulb} source={lightBulb} />
          <Text style={styles.baseText}>Learn</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.group}>
          <Image style={styles.handPeople} source={handPeople} />
          <Text style={styles.baseText}>Rewards</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // flex: 1,
    backgroundColor: "#73a1d1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    bottom: 0,
    margin: 0,
    paddingHorizontal: 42,
    height: 97.94,
  },
  group: {
    justifyContent: "center",
    alignItems: "center",
  },
  baseText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "500",
  },
  share: {
    marginBottom: 12,
  },
});
