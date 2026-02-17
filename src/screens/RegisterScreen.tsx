import React, { useContext, useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Alert,
} from "react-native";

import { AuthContext } from "../context/AuthContext";

export default function RegisterScreen({ navigation }: any) {

  const { register } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    if (!email || !password) {

      Alert.alert("Error", "Enter email and password");

      return;

    }

    const success = await register(email, password);

    if (success) {

      navigation.goBack();

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
              Register
            </Text>

            {/* Email */}
            <TextInput
              placeholder="Enter email"
              placeholderTextColor="#999"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />

            {/* Password */}
            <TextInput
              placeholder="Enter password"
              placeholderTextColor="#999"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />

            {/* Register Button */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleRegister}
            >

              <Text style={styles.registerButtonText}>
                Register
              </Text>

            </TouchableOpacity>

            {/* Back Button */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >

              <Text style={styles.backButtonText}>
                Back to Login
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </ImageBackground>

    </>

  );

}

const styles = StyleSheet.create({

  background: {
    flex: 1,
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

  registerButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

  backButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  backButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

});
