import React, { useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/todo/todoSlice";

const TrackListScreen = ({ navigation }) => {
  const { list } = useSelector((state) => state.todo);
  const { loggedUser } = useSelector((state) => state.login);
  console.log("list: ", list);
  const dispatch = useDispatch();
  console.log("user: ", loggedUser);

   useEffect(() => {
     // Check if the user is not logged in, then navigate to the loginFlow
     if (!loggedUser || Object.keys(loggedUser).length === 0) {
       console.log("no logged user");
       navigation.navigate("loginFlow");
     }
   }, [loggedUser, navigation]);
  return (
    <View>
      {loggedUser ? (
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
                  onPress={() => dispatch(remove({ id: todo.id }))}
                />
              </View>
            ))
          ) : (
            // Render something when the list is empty
            <Text>No todos available.</Text>
          )}
        </Spacer>
      ) : null}
    </View>
  );
};

TrackListScreen.navigationOptions = ({ navigation }) => {
    const loggedUser = navigation.getParam("loggedUser", null);
    console.log("title: ", loggedUser)
  return {
    headerTitle: () => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Todo</Text>
        <Text style={{ marginLeft: 10, fontSize: 14, color: "gray" }}>
          Hi, {loggedUser ? loggedUser : "null"}
        </Text>
      </View>
    ),
  };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
