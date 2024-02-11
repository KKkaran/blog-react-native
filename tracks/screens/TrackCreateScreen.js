import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import Spacer from "../components/Spacer";
import { Button, Text, Input, InputA } from "react-native-elements";
import { useDispatch } from "react-redux";
import { add } from "../features/todo/todoSlice";

const TrackCreateScreen = ({ navigation }) => {
  const [todo, setTodo] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const dispatch = useDispatch();

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const addTodo = () => {
    if (todo && todoDesc) {
      console.log("sending info to store");
      dispatch(add({ title: todo, description: todoDesc }));
      setTodo("")
      setTodoDesc("")
      return navigation.navigate("trackListFlow");
    }
    console.log("missing info to send");
  };
  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <View style={styles.container}>
        <Spacer>
          <Text style={{ fontSize: 30 }}>TrackCreate Screen</Text>
          <View>
            <Spacer>
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                label="Title"
                value={todo}
                onChangeText={setTodo}
              />
            </Spacer>
            <Spacer>
              <Input
                autoCorrect={false}
                label="Description"
                value={todoDesc}
                onChangeText={setTodoDesc}
                multiline={true}
              />
            </Spacer>
          </View>
          <Spacer>
            <Button title="Create" onPress={addTodo} />
          </Spacer>
        </Spacer>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "start",
    flex: 1,
    marginTop: 50,
  },
});

export default TrackCreateScreen;
