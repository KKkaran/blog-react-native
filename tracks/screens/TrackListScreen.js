import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/todo/todoSlice";

const TrackListScreen = ({ navigation }) => {
  const {list} = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log("todoState: ", list);

  return (
    <View>
      <Spacer>
        <Text h3>Current Todos:</Text>
        {list.length > 0 ? (
          // Render your list items here
          list.map((todo) => (
            <View key={todo.id}>
              <Text>{todo.title}</Text>
              <Text>{todo.description}</Text>
              <Button
                title="Remove"
                onPress={() => dispatch(remove({ id: todo.id}))}
              />
            </View>
          ))
        ) : (
          // Render something when the list is empty
          <Text>No todos available.</Text>
        )}
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
