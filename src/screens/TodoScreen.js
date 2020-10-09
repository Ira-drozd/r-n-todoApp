import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCatd } from "../components/UI/AppCatd";
import { THEME } from "../theme";
import { AppTextBold } from "../components/UI/AppTextBold";
import { AppButton } from "../components/UI/AppButton";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export const TodoScreen = ({ goBack, todo, removeTodo, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />

      <AppCatd style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCatd>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton color={THEME.GREY_COLOR} onPress={goBack}>
            <AntDesign name="back" size={20} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => removeTodo(todo.id)}
          >
            <FontAwesome name="remove" size={20} />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    marginBottom: 20,
    padding: 15,
  },
  button: {
    width: "40%",
  },
  title: {
    fontSize: 20,
    width: "80%",
  },
});
