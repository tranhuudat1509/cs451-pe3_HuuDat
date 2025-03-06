import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos = [], deleteTodo, toggleComplete }) => {
    return (
        <View>
            {todos.map((todo, i) => (
                <Todo
                    key={i}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    todo={todo}
                />
            ))}
        </View>
    );
};

export default TodoList;
