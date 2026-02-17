import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from "react-native";

import { updateNote } from "../services/storage";

export default function EditNoteScreen({ navigation, route }: any) {

  const { noteData } = route.params;

  const [title, setTitle] = useState(noteData.title);
  const [note, setNote] = useState(noteData.note);

  const save = async () => {

    const success = await updateNote({
      ...noteData,
      title,
      note,
      date: new Date().toISOString(),
    });

    if (success) {

      alert("Note updated successfully");

      navigation.goBack();
      navigation.goBack();

    }

  };

  return (

    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.background}
      imageStyle={{ opacity: 0.4 }}
      resizeMode="cover"
    >

      <StatusBar hidden />

      <View style={styles.container}>

        <Text style={styles.title}>
          Edit Note
        </Text>

        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Enter title"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          value={note}
          onChangeText={setNote}
          placeholder="Enter note"
          placeholderTextColor="#999"
          multiline
          style={[styles.input, styles.noteInput]}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={save}
        >
          <Text style={styles.buttonText}>
            Save Changes
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
    backgroundColor: "rgba(0,0,0,0.6)",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 14,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },

  noteInput: {
    height: 120,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

});
