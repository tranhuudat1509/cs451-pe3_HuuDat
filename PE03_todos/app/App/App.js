import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Input from "./Input";
import Heading from "./Heading";
import Button from "./Button";
import TodoList from './TodoList';

let todoIndex = 0;

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            todos: [],
            type: 'All' // Default tab
        };
        this.submitTodo = this.submitTodo.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(todoIndex) {
        let { todos } = this.state;
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex);
        this.setState({ todos });
    }

    toggleComplete(todoIndex) {
        let todos = this.state.todos.map(todo => {
            if (todo.todoIndex === todoIndex) {
                return { ...todo, complete: !todo.complete };
            }
            return todo;
        });

        this.setState({ todos });
    }

    inputChange(inputValue) {
        console.log(" Input Value: ", inputValue);
        this.setState({ inputValue });
    }

    submitTodo() {
        const { inputValue, todos } = this.state;
        if (inputValue.trim() === "") return;

        const newTodo = {
            todoIndex: todoIndex++, // Unique identifier
            Title: inputValue,
            complete: false
        };

        this.setState({
            todos: [...todos, newTodo],
            inputValue: "",
        });
    }

    render() {
        const { inputValue, todos, type } = this.state;
        console.log("Current tab type:", this.state.type);


        // Filter todos based on active tab
        const filteredTodos = todos.filter(todo => {
            if (type === "Active") return !todo.complete;
            if (type === "Completed") return todo.complete;
            return true; // Show all in "All" tab
        });

        // Define what each tab can do
        const canAddTodo = type === "All"; // Only "All" can add todos
        const canDeleteTodo = type === "Completed" || type === "All";
        const canCheckDone = type !== "Completed";

        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Heading />

                    {/* Only show input if adding is allowed */}
                    {canAddTodo && (
                        <Input
                            inputValue={inputValue}
                            inputChange={(text) => this.inputChange(text)}
                        />
                    )}

                    {/* Pass filtered todos and allowed actions */}
                    <TodoList
                        toggleComplete={canCheckDone ? this.toggleComplete : null}
                        deleteTodo={canDeleteTodo ? this.deleteTodo : null}
                        todos={filteredTodos}
                    />

                    {/* Show Add button only in "All" tab */}
                    {canAddTodo && <Button submitTodo={this.submitTodo} />}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    inputContainer: {
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: "#fff",
    },
    todoItem: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "#fff",
        marginVertical: 5,
        borderRadius: 5,
    },
});

export default App;
