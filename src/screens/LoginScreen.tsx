import React, { useContext, useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Alert,
} from "react-native";

import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }: any) {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email || !password) {

      Alert.alert("Error", "Enter email and password");

      return;

    }

    const success = await login(email, password);

    if (success) {

      navigation.replace("Home");

    }

  };

  return (

    <>

      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.background}
        resizeMode="cover"
      >

        <View style={styles.overlay}>

          <View style={styles.container}>

            <Text style={styles.title}>
              Login
            </Text>

            {/* Email */}
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#999"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            {/* Password */}
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            {/* Buttons */}
            <View style={styles.buttonRow}>

              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
              >

                <Text style={styles.loginButtonText}>
                  Login
                </Text>

              </TouchableOpacity>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate("Register")}
              >

                <Text style={styles.registerButtonText}>
                  Register
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </ImageBackground>

    </>

  );

}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
  },

  container: {
    padding: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#FFFFFF",
  },

  input: {
    borderWidth: 1,
    borderColor: "#444",
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    backgroundColor: "#FFFFFF",
    fontSize: 16,
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },

  loginButton: {
    flex: 1,
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginRight: 5,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  registerButton: {
    flex: 1,
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 5,
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

});
