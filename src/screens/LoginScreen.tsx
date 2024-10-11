import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Alert } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import SocialMedia from "../components/SocialMedia";
import { supabase } from "../lib/supabase";

const LoginScreen = () => {
  // State variables
  const [email, setEmail] = useState('');   
  const [password, setPassword] = useState(''); 
  const [loading, setLoading] = useState(false);

  // Handle login logic
  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      Alert.alert('Login Error', error.message);
    } else {
      Alert.alert('Success', 'You are logged in!');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/fonts/frame1.png")}
        style={styles.imageBackground}
      >
        <View style={styles.inputContainer}>
          <MyTextInput 
            placeholder="Enter your E-mail or Username" 
            value={email}
            onChangeText={setEmail}   
          />
          <MyTextInput 
            placeholder="Password" 
            secureTextEntry
            value={password}
            onChangeText={setPassword}  
          />
          <Text style={styles.dontHave}>Don't Have an account yet?</Text>
          <MyButton 
            title={loading ? "Logging in..." : "Login"} 
            onPress={handleLogin} 
            disabled={loading}
          />
          <Text style={styles.or}>OR</Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    height: 420,
    width: '100%',
    alignItems: 'stretch',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
  },
  dontHave: {
    alignSelf: 'flex-end',
    marginRight: 10,
    color: 'black',
    marginBottom: 15,
  },
  or: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
