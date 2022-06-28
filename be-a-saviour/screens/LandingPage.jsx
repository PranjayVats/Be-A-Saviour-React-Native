import { useNavigation } from "@react-navigation/core";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { StyleSheet, Text, View, SafeAreaView, Image,TouchableOpacity, Linking } from "react-native";

const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
     
      <View
        style={{ height: "25%", width: "100%", backgroundColor: "#579A78" , padding: 20}}
      >
        <Image
        source={require("../assets/logo.jpeg")}
          style={{
            
            height: 100,
            width: 100,
            borderRadius: 50,
            marginTop: getStatusBarHeight(),
            
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 30,
          }}
          
        />
      </View>
      <View style={styles.landingPage}>
        <View style={styles.login}>
          <Text
            onPress={() => navigation.navigate("loginMainUser")}
            style={styles.button}
          >
           Sign in/Login as a User
          </Text>
        </View>
        <View style={styles.login}>
          {/* <Text>Saviour</Text> */}

          <Text
            onPress={() => navigation.navigate("login")}
            style={styles.button}
          >
            Sign In/Login as a Saviour
          </Text>
        </View>
        
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(`tel:helpline number`)} style={{justifyContent: 'center', alignItems: 'center', backgroundColor: '#579A78', width: '100%',height: 220}}>
            <Text>Press the SOS Icon for Emergency Help</Text>
          <Image 
            source={require("../assets/img2.jpeg")}
            style={{ height: 100, width: 100, borderRadius: 50,  marginTop: getStatusBarHeight() }}
          />
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
    marginTop: 0,
  },
  landingPage: {
    justifyContent: "center",
    flexDirection: "column",
    padding: 20,
    height: 350
  },
  login: {
    marginBottom: 30,
  },
  button: {
    justifyContent: "center",
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    borderWidth: 2,
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderColor:"#579A78",
  },
});