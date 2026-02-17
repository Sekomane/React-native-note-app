import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
  StatusBar,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { addNote } from "../services/storage";
import { v4 as uuidv4 } from "uuid";

export default function AddNoteScreen({ navigation }: any) {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Personal");

 const handleAdd = async () => {

  if (!note.trim()) {
    alert("Note cannot be empty");
    return;
  }

  const newNote = {
    id: uuidv4(),
    title: title || "Untitled",
    note,
    category,
    date: new Date().toISOString(),
  };

  const success = await addNote(newNote);

  if (success) {

    alert("Note successfully added");

    navigation.navigate("Home");

  } else {

    alert("Failed to save note");

  }

};

  return (

    <View style={{ flex: 1 }}>

      <StatusBar hidden={true} />

      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.background}
        imageStyle={{ opacity: 0.4 }}
        resizeMode="cover"
      >

        <View style={styles.overlay}>

          <Text style={styles.title}>
            Add Note
          </Text>

          {/* Title */}
          <Text style={styles.label}>
            Title (optional)
          </Text>

          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Enter title"
            placeholderTextColor="#777"
          />

          {/* Note */}
          <Text style={styles.label}>
            Note *
          </Text>

          <TextInput
            style={[styles.input, styles.noteInput]}
            multiline
            value={note}
            onChangeText={setNote}
            placeholder="Write your note here..."
            placeholderTextColor="#777"
          />

          {/* Category */}
          <Text style={styles.label}>
            Category
          </Text>

          <View style={styles.pickerWrapper}>

            <Picker
              selectedValue={category}
              onValueChange={(val: string) => setCategory(val)}
              style={styles.picker}
            >
              <Picker.Item label="Personal" value="Personal" />
              <Picker.Item label="Work" value="Work" />
              <Picker.Item label="Study" value="Study" />
            </Picker>

          </View>

          {/* Save Button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleAdd}
          >
            <Text style={styles.buttonText}>
              Save Note
            </Text>
          </TouchableOpacity>

        </View>

      </ImageBackground>

    </View>

  );

}

const styles = StyleSheet.create({

  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFFFFF",
  },

  label: {
    color: "#FFFFFF",
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#FFFFFF",
    color: "#000",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },

  noteInput: {
    height: 120,
    textAlignVertical: "top",
  },

  pickerWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
  },

  picker: {
    color: "#000",
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },

});
