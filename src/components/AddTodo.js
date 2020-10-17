import React, {useState} from "react";
import {View, TextInput, StyleSheet, Alert, Keyboard} from "react-native";
import {AntDesign} from "@expo/vector-icons";

export const AddTodo = ({addTodo}) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        if (value.trim()) {
            addTodo(value.trim());
            setValue("");
            Keyboard.dismiss();
        } else {
            Alert.alert("Title can't be empty");
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Enter title..."
                autoCorrect={false}
                autoCapitalize="none"
            />
            <AntDesign.Button name="pluscircle" size={24} onPress={pressHandler}>
                Add item
            </AntDesign.Button>

            {/* <Button title="Add item" onPress={pressHandler} /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    input: {
        //width: "60%",
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#3949ab",
    },
});
