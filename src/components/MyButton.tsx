import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const MyButton = ({ title }: { title: string }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default MyButton;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a0938b',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});
