import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout, updateProfile, addLocation } from "../redux/action";
import mime from "mime";
import Loader from "../components/Loader";
import * as Location from "expo-location";
// import axios from '../axios'

const Profile = ({ navigation, route }) => {
  // const serverUrl = "https://be-a-saviour-react-native.herokuapp.com/api/v1";
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar.url);
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
      getLocation();
    })();
  }, []);

  let lat = 0;
  let long = 0;
  const getLocation = async () => {
    var text = "waiting...";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
      lat = await JSON.parse(text).coords.latitude;
      long = await JSON.parse(text).coords.longitude;
    }
    if (lat && long) {
      await dispatch(addLocation(lat, long));
    }
    
  };

  useEffect(() => {
    if (route.params) {
      if (route.params.image) {
        setAvatar(route.params.image);
      }
    }
  }, [route]);

  const submitHandler = async () => {
    const myForm = new FormData();
    myForm.append("name", name);
    myForm.append("avatar", {
      uri: avatar,
      type: mime.getType(avatar),
      name: avatar.split("/").pop(),
    });
    await dispatch(updateProfile(myForm));
    dispatch(loadUser());
  };

  const handleImage = () => {
    navigation.navigate("camera", {
      updateProfile: true,
    });
  };

  const logoutHandler = () => {
    dispatch(logout());
  };

  return loading ? (
    <Loader />
  ) : (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Avatar.Image
        size={100}
        source={{ uri: avatar ? avatar : null }}
        style={{ backgroundColor: "#900" }}
      />
      <TouchableOpacity onPress={handleImage}>
        <Text style={{ color: "#900", margin: 20 }}>Change Photo</Text>
      </TouchableOpacity>

      <View style={{ width: "70%" }}>
        <TextInput
          style={Styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <Button style={Styles.btn} onPress={submitHandler}>
        <Text style={{ color: "#fff" }}>Update</Text>
      </Button>

      <Button
        color="rgb(50,50,50)"
        onPress={() => navigation.navigate("changepassword")}
      >
        Change Password
      </Button>

      <Button color="rgb(50,50,50)" onPress={logoutHandler}>
        Logout
      </Button>

      {user.verified ? null : (
        <Button onPress={() => navigation.navigate("verify")}>Verify</Button>
      )}
    </View>
  );
};

export default Profile;

const Styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  btn: {
    backgroundColor: "#900",
    padding: 5,
    width: "70%",
  },
});
