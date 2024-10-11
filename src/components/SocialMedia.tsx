import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SocialMedia = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require("../assets/fonts/facebook.png")}
                style={styles.image} 
            />
            <Image 
                source={require("../assets/fonts/github.png")} 
                style={styles.image}
            />
            <Image 
                source={require("../assets/fonts/google.png")} 
                style={styles.image}
            />
        </View>
    );
}

export default SocialMedia;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        flexDirection: 'row',
        width: '100%',
    },
    image: {
        height: 50,  // Adjust height as per your need
        width: 50,   // Adjust width as per your need
        resizeMode: 'contain', // Ensure the image scales properly
    },
});
