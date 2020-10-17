import React, {useContext, useState} from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {EditModal} from "../components/EditModal";
import {AppCatd} from "../components/UI/AppCatd";
import {THEME} from "../theme";
import {AppTextBold} from "../components/UI/AppTextBold";
import {AppButton} from "../components/UI/AppButton";
import {FontAwesome, AntDesign} from "@expo/vector-icons";
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

export const TodoScreen = () => {
    const {todos, updateTodo, removeTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false);

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = (title) => {
        updateTodo(todo.id, title)
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
                    <FontAwesome name="edit" size={20}/>
                </AppButton>
            </AppCatd>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)}>
                        <AntDesign name="back" size={20}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={() => removeTodo(todo.id)}
                    >
                        <FontAwesome name="remove" size={20}/>
                    </AppButton>
                </View>
            </View>
        </View>
    );
};

console.log();

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
        width: Dimensions.get("window").width / 3,
        //width: Dimensions.get("window").width > 400 ? 150 : 100,
    },
    title: {
        fontSize: 20,
        width: "80%",
    },
});
