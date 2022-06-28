import React, { useEffect, useState } from "react";
import { Linking, StyleSheet, Text, View, Image } from "react-native";
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

const VolLoc = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let lat = 0;
  let long = 0;

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    lat = JSON.parse(text).coords.latitude;
    // console.log(typeof(lat));
    long = JSON.parse(text).coords.longitude;
  }

  const circle = {
    center: {
      'latitude':28.685262 ,
      'longitude':77.290428
    },
    radius: 150
  }
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        region={{
          latitude: 28.685262,
          longitude: 77.290098,
          latitudeDelta: 0.0009,
          longitudeDelta: 0.002,
        }}
      >
        <Marker
        coordinate={{
            latitude: 28.685262,
            longitude: 77.290428,
          }}
        >
        </Marker>
        <Circle
                
                center = { circle.center }
                radius = { circle.radius}
                strokeWidth = { 1 }
                strokeColor = { '#00FF00' }
                fillColor = { 'rgba(124,252,0,0.3)' }
                
        />
        <Marker
          onPress={() => {
            Linking.openURL(
              `mailto:mankeswapnil0@gmail.com?subject=Need Help!&body=https://www.google.com/maps/dir/${
                lat + "," + long
              }/28.685262,77.290098`
            );
          }}
          coordinate={{
            latitude: 28.685262,
            longitude: 77.290098,
          }}
        >
          <Image
            source={require("../assets/pin.png")}
            style={{ height: 48, width: 30.7 }}
          />
        </Marker>
        <Marker
          onPress={() => {
            Linking.openURL(
              `mailto:aman.mail2212@gmail.com?subject=Need Help!&body=https://www.google.com/maps/dir/${
                lat + "," + long
              }/28.686268,77.290428`
            );
          }}
          coordinate={{
            latitude: 28.686268,
            longitude: 77.290428,
          }}
        >
          <Image
            source={require("../assets/pin.png")}
            style={{ height: 48, width: 30.7 }}
          />
        </Marker>
        <Marker
          onPress={() => {
            Linking.openURL(
              `mailto:pranjayvats22062001@gmail.com?subject=Need Help!&body=https://www.google.com/maps/dir/${
                lat + "," + long
              }/28.686468,77.290828`
            );
          }}
          coordinate={{
            latitude: 28.686468,
            longitude: 77.290828,
          }}
        >
          <Image
            source={require("../assets/pin.png")}
            style={{ height: 48, width: 30.7 }}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default VolLoc;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
