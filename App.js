import { StatusBar } from "expo-status-bar";
import React, { createFactory, useState, useFonts } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  Alert,
  //,
  // useFonts
} from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

/*async function loadApplication() {


  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}*/

export default function App() {
  //const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const [loaded] = Font.useFonts({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  /*if (!isReady) {
    <AppLoading
      startAsync={loadApplication}
      onError={(err) => console.log(err)}
      onFinish={() => setIsReady(true)}
    />;
  }*/

  const addTodo = (title) => {
    setTodos((prevState) => [
      ...prevState,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((item) => item.id === id);
    Alert.alert(
      "Remove todo",
      `Are you sure you want to delete ${todo.title}?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Remove",
          style: "destructive",
          onPress: () => {
            setTodoId(null);
            setTodos((prevState) =>
              prevState.filter((title) => title.id !== id)
            );
          },
        },
      ],
      { cancelable: true }
    );
  };

  const updateTodo = (id, title) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        goBack={() => setTodoId(null)}
        removeTodo={removeTodo}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar title="Todo app" />
      <View style={styles.container}>{content}</View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
