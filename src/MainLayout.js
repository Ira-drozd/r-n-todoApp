import React, {useState, useContext} from "react";
import {StatusBar} from "expo-status-bar";
import {Navbar} from "./components/Navbar";
import {
    StyleSheet,
    View,
    SafeAreaView,
} from "react-native";
import {THEME} from "./theme";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = (props) => {
    const {todoId} = useContext(ScreenContext)

    return (
        <SafeAreaView style={{flex: 1}}>
            <Navbar title="Todo app"/>
            <View style={styles.container}>
                {
                    todoId
                        ? <TodoScreen/>
                        : <MainScreen/>
                }
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
    },
});
