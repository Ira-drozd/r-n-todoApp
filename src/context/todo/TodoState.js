import React, {useReducer, useContext} from "react";
import {ScreenContext} from "../screen/screenContext";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../types";
import {TodoContext} from "./todoContext";
import {todoReducer} from "./todoReducer";
import {Alert} from 'react-native'

export const TodoState = ({children}) => {
    const initialState = {
        todos: [],
    };

    const {changeScreen} = useContext(ScreenContext)

    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = (title) => dispatch({type: ADD_TODO, title})

    const removeTodo = (id) => {
        const todo = state.todos.find((item) => item.id === id);

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
                        changeScreen(null)
                        dispatch({type: REMOVE_TODO, id})
                    },
                },
            ],
            {cancelable: true}
        );

    }

    const updateTodo = (id, title) => {

        console.log(state.todos, id, title);

        return dispatch({type: UPDATE_TODO, id, title})
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                addTodo,
                removeTodo,
                updateTodo
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
