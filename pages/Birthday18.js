import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import meter from "../assets/images/meter.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RequestSend from "../components/RequestSend";
import TitleMoney from "../components/TitleMoney";
import Transactions from "../components/Transactions";

const Birthday18 = ({navigation}) => {
  return (
    <>
      <SafeAreaView nestedScrollEnabled={true} style={styles.container}>
      <Header navigation={navigation} showSettings={true} />
        <ScrollView style={styles.scrollBox}>
          <TitleMoney />
          <RequestSend />
          <View style={styles.centerBox}>
            <Image style={styles.image} source={meter} />
            <Text style={styles.text1}>
              Establishing a credit history ensures your financial will-being in
              future. You will need an excellent credit record to apply for
              leases and mortgages, secure loans, and even advance your career.
            </Text>
            <Text style={styles.text2}>
              Our Zero Fee Credit Card can help you establish your credit whhile
              taking advantage of many additional benefits.
            </Text>
            <TouchableOpacity style={{ width: 132, alignSelf: "center" }}>
              <Text style={styles.apply}>Apply Now</Text>
            </TouchableOpacity>
          </View>
          <Transactions />
        </ScrollView>
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default Birthday18;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  image: {
    alignSelf: "center",
  },
  centerBox: {
    backgroundColor: "#494949",
    marginTop: 32,
    borderRadius: 20,
    padding: 20,
  },
  text1: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  text2: {
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontWeight: "700",
  },
  apply: {
    backgroundColor: "#E0E0E0",
    width: 132,
    alignSelf: "center",
    height: 28,
    lineHeight: 28,
    textAlign: "center",
    marginTop: 20,
    borderRadius: 20,
    color: "#888",
    fontWeight: "700",
  },
});
