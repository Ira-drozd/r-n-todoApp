import React, {useContext, useEffect, useState} from "react";
import {View, StyleSheet, FlatList, Image, Dimensions} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";
import {ScreenContext} from "../context/screen/screenContext";
import {TodoContext} from "../context/todo/todoContext";
import {THEME} from "../theme";

export const MainScreen = () => {
    const {todos, addTodo, removeTodo} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)
    const [diviceWidth, setDeviceWidth] = useState(
        Dimensions.get("window").width - THEME.PADDING_HORIZONTAL * 2
    );

    useEffect(() => {
        const update = () => {
            const width = Dimensions.addEventListener("change");
            setDeviceWidth(width);
        };
        Dimensions.addEventListener("change", update);

        return () => {
            Dimensions.removeEventListener("change", update);
        };
    });

    const renderItem = ({item}) => (
        <Todo todo={item} onRemove={removeTodo} onOpen={changeScreen}/>
    );

    let content = (
        <View style={{diviceWidth}}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={todos}
                renderItem={renderItem}
            />
        </View>
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
            <AddTodo addTodo={addTodo}/>
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
