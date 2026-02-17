
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface NoteCardProps {
  note: {
    id: string;
    title?: string;
    note: string;
    category: string;
    date: string;
  };
  onPress: () => void;
}

export default function NoteCard({ note, onPress }: NoteCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {note.title ? <Text style={styles.title}>{note.title}</Text> : null}
      <Text style={styles.note}>{note.note}</Text>
      <Text style={styles.meta}>{note.category} | {new Date(note.date).toLocaleString()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: { color: "#fff", fontWeight: "bold", fontSize: 16, marginBottom: 5 },
  note: { color: "#fff", marginBottom: 5 },
  meta: { color: "#aaa", fontSize: 12 },
});
