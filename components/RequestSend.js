import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const RequestSend = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.item}>Request</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.item}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestSend;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 25,
    justifyContent: "center",
  },
  item: {
    marginHorizontal: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 20,
    width: 132,
    paddingVertical: 6,
    textAlign: "center",
    color: "#888",
    fontWeight: "700",
  },
});
