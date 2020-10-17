import React, {useFonts} from "react";
import * as Font from "expo-font";
import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";
import {ScreenState} from "./src/context/screen/ScreenState";


export default function App() {

    const [loaded] = Font.useFonts({
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    );
}
