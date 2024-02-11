import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { useDispatch } from "react-redux";
import { logout } from "../features/authentication/authSlice";

const AccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const logoutUser = () => {
    //get the global state and delete the loggedUser obj
    dispatch(logout());
    return navigation.navigate("loginFlow");
  };
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Account Settings:</Text>
        <Button title="Logout" onPress={logoutUser} />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: "red",
    flex: 1,
    marginTop: 50,
  },
});

export default AccountScreen;
