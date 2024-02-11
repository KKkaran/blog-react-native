import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { useDispatch } from "react-redux";
import { login } from "../features/authentication/authSlice";


const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginUser = () => {
    if (email && username && password) {
      console.log("loggin in: ", email, username);
      dispatch(login({email, username}))
      return navigation.navigate("TrackList", { loggedUser: username });
    }
    console.log("invalid date to login");
  };
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Purchaseit</Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          value={email}
          onChangeText={setEmail}
        />
      </Spacer>

      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
      </Spacer>

      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
      </Spacer>

      <Spacer>
        <Button title="Signup" onPress={loginUser} />
      </Spacer>

      <Spacer>
        <Button
          title="Main Flow"
          onPress={() => navigation.navigate("mainFlow")}
        />
      </Spacer>
    </View>
  );
};
SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignUpScreen;
