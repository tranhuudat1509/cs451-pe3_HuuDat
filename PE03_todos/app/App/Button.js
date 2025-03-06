import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Get screen width

const Button = ({ submitTodo }) => (
    <TouchableOpacity style={styles.button} onPress={submitTodo}>
        <Text style={styles.text}>Add Todo</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '40%',  // 40% of screen width
        backgroundColor: 'white',
        paddingVertical: 10,  // Adjust height
        alignSelf: 'flex-end',  // Push it to the right
        marginTop: 20, // Add space from the top edge
        marginRight: 45,  // Add space from the right edge
        borderWidth: 1,  // Optional: Add border for visibility
        borderColor: 'black',
        borderRadius: 5
    },
    text: {
        color: 'black',
        textAlign: 'center', // Keep text centered inside button
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default Button;
