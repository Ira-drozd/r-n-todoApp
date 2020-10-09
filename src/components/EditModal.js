import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./UI/AppButton";

export const EditModal = ({ visible, onCancel, value, onSave }) => {
  const [title, setTitle] = useState(value);

  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error!",
        `Min length title 3 chars. Now ${title.trim().length} chars.`
      );
    } else {
      onSave(title.trim());
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder="Enter title"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>
              Cancel
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton onPress={saveHandler}>Save</AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 5,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },
  buttons: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: "40%",
  },
});
