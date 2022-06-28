import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import React, { useEffect, useState } from "react";
// import Task from "../components/Task";
import Icon from "react-native-vector-icons/Entypo";
import { Dialog, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addTask, loadUser } from "../redux/action";

const Home = ({ navigation }) => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { loading, message, error } = useSelector((state) => state.message);

  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const hideDialog = () => {
    setOpenDialog(!openDialog);
  };

  const addTaskHandler = async () => {
    await dispatch(addTask(title, description));
    dispatch(loadUser());
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch({ type: "clearError" });
      //   dispatch({ type: "clearError" });
    }
    if (message) {
      alert(message);
      dispatch({ type: "clearMessage" });
    }
  }, [alert, error, message, dispatch]);

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <ScrollView>
          <SafeAreaView>
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
            <View style={styles.main}>
              <TouchableOpacity onPress={() => navigation.navigate("VolLoc")}>
                <View style={styles.content}>
                  <Text style={styles.button}>SEE YOUR NEARBY SAVIOURS</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("SOS")}>
                <View style={styles.content}>
                  <Text style={styles.button}>EMERGENCY SOS</Text>
                </View>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#474747",
  },
  header: {
    padding: 20,
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:85,
    backgroundColor: "#579A78",
  },
  addBtn: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
  },
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
  content: {
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    marginBottom: 30,
    borderWidth: 3,
    borderRadius: 5,
    padding: 15,
    marginBottom: 30,
  },
});
