import React, { useEffect, useState, useCallback } from "react";

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import { getNotes } from "../services/storage";
import NoteCard from "../components/NoteCard";

export default function HomeScreen({ navigation }: any) {

  const [notes, setNotes] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const fetchNotes = async () => {

    const data = await getNotes();

    let filtered = data;

    if (search.trim() !== "") {

      filtered = filtered.filter((n: any) =>
        (n.title + n.note)
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    }

    filtered.sort((a: any, b: any) =>
      sortAsc
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setNotes(filtered);

  };

  // THIS FIXES DELETE + UPDATE REFRESH
  useFocusEffect(
    useCallback(() => {
      fetchNotes();
    }, [search, sortAsc])
  );

  return (

    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.4 }}
    >

      <StatusBar hidden />

      <View style={{ padding: 20, flex: 1 }}>

        <View style={styles.header}>

          <Text style={styles.title}>
            My Notes
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
          >
            <Ionicons
              name="person-circle-outline"
              size={40}
              color="#FFF"
            />
          </TouchableOpacity>

        </View>

        <TextInput
          style={styles.input}
          placeholder="Search notes"
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => setSortAsc(!sortAsc)}
        >
          <Text style={styles.buttonText}>
            Sort ({sortAsc ? "ASC" : "DESC"})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("AddNote")}
        >
          <Text style={styles.buttonText}>
            Add Note
          </Text>
        </TouchableOpacity>

        <FlatList
          data={notes}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={{ color: "#FFF", marginTop: 20 }}>
              No notes found
            </Text>
          }
          renderItem={({ item }) => (
            <NoteCard
              note={item}
              onPress={() =>
                navigation.navigate("NoteDetails", {
                  noteData: item,
                })
              }
            />
          )}
        />

      </View>

    </ImageBackground>

  );

}

const styles = StyleSheet.create({

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    color: "#FFF",
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  sortButton: {
    backgroundColor: "#555",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#4CAF50",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },

});
