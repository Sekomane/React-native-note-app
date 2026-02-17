import React, { useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen() {

  const { user, logout } = useContext(AuthContext);

  const username =
    user?.email ? user.email.split("@")[0] : "Guest";

  return (

    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      resizeMode="cover"
    >

      <StatusBar hidden />

      <View style={styles.container}>

        <Text style={styles.title}>
          Profile
        </Text>

        <View style={styles.infoContainer}>

          <Text style={styles.label}>
            Username
          </Text>

          <Text style={styles.value}>
            {username}
          </Text>

          <Text style={styles.label}>
            Email
          </Text>

          <Text style={styles.value}>
            {user?.email || "Not logged in"}
          </Text>

        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={logout}
        >
          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

      </View>

    </ImageBackground>

  );
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#FFF",
  },

  infoContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },

  label: {
    color: "#AAA",
    fontSize: 14,
    marginTop: 10,
  },

  value: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
  },

  logoutButton: {
    backgroundColor: "#E53935",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  logoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});
