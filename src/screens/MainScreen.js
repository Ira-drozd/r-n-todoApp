import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

export const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
  const renderItem = ({ item }) => (
    <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
  );

  let content = (
    <FlatList
      keyExtractor={(item) => item.id}
      data={todos}
      renderItem={renderItem}
    />
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgwrap}>
        <Image
          style={styles.image}
          source={require("../../assets/no-items.png")}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AddTodo addTodo={addTodo} />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgwrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
