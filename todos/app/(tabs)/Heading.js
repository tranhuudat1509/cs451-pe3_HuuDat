import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create and integrate a Heading component in the React Native app
const Heading = () => (
    <View style={styles.header}>
        <Text style={styles.headerText}>todos</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop: 80,
    },
    headerText: {
        textAlign: 'center',
        frontSize: 72,
        color: 'rgba(175, 47, 47, 0.25)',
        frontWeight: '100',
    },
});

export default Heading;