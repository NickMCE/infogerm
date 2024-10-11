import React, { FC } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
    placeholder: string;
    secureTextEntry?: boolean; // Optional prop for password input
}

const MyTextInput: FC<Props> = ({ placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#888"
                secureTextEntry={secureTextEntry} // Apply secureTextEntry prop
            />
        </View>
    );
}

export default MyTextInput;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    input: {
        height: '100%',
        width: '100%',
        fontSize: 20,
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
