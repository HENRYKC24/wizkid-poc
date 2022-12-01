import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TitleMoney = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIMPLE FREE ACCOUNT</Text>
      <Text style={styles.balance}>$1,560.20</Text>
    </View>
  );
};

export default TitleMoney;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontWeight: "500",
    color: "#000",
    fontSize: 14,
  },
  balance: {
    fontWeight: "700",
    color: "#000",
    fontSize: 32,
    letterSpacing: 0.02,
  },
});
