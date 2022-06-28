import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  Linking,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import { getStatusBarHeight } from "react-native-status-bar-height";

const SOS = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  let lat = useState(0);
  let long = useState(0);

  //   useEffect(() => {
  // (async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     setErrorMsg('Permission to access location was denied');
  //     return;
  //   }

  //   let location = await Location.getCurrentPositionAsync({});
  //   setLocation(location);
  // })();
  //   }, []);

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  //   lat = JSON.parse(text).coords.latitude;
  //   long = JSON.parse(text).coords.longitude;
  // }
  //   const message = `https://www.google.com/maps/@${lat+','+long},17z`

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ justifyContent: "center" }}>
          <Image
            source={require("../assets/logo.jpeg")}
            style={{
              height: 120,
              width: 120,
              borderRadius: 60,
              marginTop: getStatusBarHeight(),
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "auto",
        }}
      >
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:+919873596849`)}
          style={styles.button}
        >
          <View style={{ justifyContent: "center" }}>
            <Image
              source={require("../assets/img2.jpeg")}
              style={{
                height: 220,
                width: 220,
                borderRadius: 110,
                marginTop: getStatusBarHeight(),
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SOS;

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  header: {
    padding: 20,
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#579A78",
  },
  button: {
    fontSize: 100,
  },
});
