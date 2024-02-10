import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>

      <Spacer>
        <Input label="Email" />
      </Spacer>

      <Spacer>
        <Input label="Password" />
      </Spacer>

      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignUpScreen;
