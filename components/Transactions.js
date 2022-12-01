import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import transactions from "../utils/transactions";
import separateThousandsWithCommas from "../utils/separateThousandsWithCommas";

import group from "../assets/images/group.png";

const Transactions = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.transHeader}>
        <Text style={styles.tranText}>Transactions</Text>
        <TouchableOpacity>
          <Image style={styles.group} source={group} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {transactions.map((trans) => (
          <TouchableWithoutFeedback key={trans.id} style={styles.transBox}>
            <View style={styles.transactionItem}>
              <View style={styles.typeBox}>
                <Text style={styles.transType}>
                  {trans.type === "credit" ? "Received Money" : "Sent Money"}
                </Text>
                <Text style={styles.transWho}>{trans.who}</Text>
              </View>
              <View style={styles.transDetails}>
                <Text style={styles.transAmount}>
                  {trans.type === "credit" ? "+" : "-"}
                  {" $"}
                  {separateThousandsWithCommas(trans.amount.toFixed(2))}
                </Text>
                <Text style={styles.transDate}>{trans.date}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    marginBottom: 250,
  },
  transBox: {
    // height: 200,
  },
  transHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  tranText: {
    fontSize: 24,
    fontWeight: "400",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  transType: {
    color: "#31456a",
    fontSize: 15,
    fontWeight: "400",
  },
  transWho: {
    color: "#7787A2",
    fontSize: 10,
    fontWeight: "400",
  },
  transAmount: {
    color: "#677895",
    fontSize: 16,
    fontWeight: "400",
  },
  transDate: {
    color: "#7787A2",
    fontSize: 10,
    fontWeight: "400",
  },
  transDetails: {
    display: "flex",
    alignItems: "flex-end",
  },
});
