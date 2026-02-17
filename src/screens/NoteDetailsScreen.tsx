import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  StatusBar,
  Platform,
} from "react-native";

import { deleteNote } from "../services/storage";

export default function NoteDetailsScreen({ navigation, route }: any) {

  const { noteData } = route.params;

  const handleDelete = async () => {

    console.log("DELETE PRESSED:", noteData.id);

    // WEB FIX
    if (Platform.OS === "web") {

      const confirmDelete = window.confirm(
        "Are you sure you want to delete this note?"
      );

      if (!confirmDelete) return;

      const success = await deleteNote(noteData.id);

      if (success) {

        alert("Note deleted successfully");

        // FORCE refresh
        navigation.replace("Home");

      } else {

        alert("Delete failed");

      }

      return;
    }

    // MOBILE FIX
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {

            const success = await deleteNote(noteData.id);

            if (success) {

              Alert.alert(
                "Deleted",
                "Note deleted successfully",
                [
                  {
                    text: "OK",
                    onPress: () =>
                      navigation.replace("Home"),
                  },
                ]
              );

            } else {

              Alert.alert("Error", "Delete failed");

            }

          },
        },
      ]
    );

  };

  return (

    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
    >

      <StatusBar hidden />

      <View style={styles.container}>

        <Text style={styles.title}>
          {noteData.title}
        </Text>

        <Text style={styles.note}>
          {noteData.note}
        </Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate("EditNote", { noteData })
          }
        >
          <Text style={styles.buttonText}>
            Edit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>
            Delete
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
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
    marginBottom: 15,
  },

  note: {
    fontSize: 18,
    color: "#CCC",
    marginBottom: 30,
  },

  editButton: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  deleteButton: {
    backgroundColor: "#E53935",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

});
