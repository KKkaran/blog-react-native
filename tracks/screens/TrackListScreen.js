import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 50 }}>TrackList Screen</Text>
      <Button
        title="Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      ></Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
