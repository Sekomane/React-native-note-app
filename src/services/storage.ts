import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY = "notes";

export const getNotes = async () => {
  try {
    const data = await AsyncStorage.getItem(NOTES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("getNotes error:", error);
    return [];
  }
};

export const saveNotes = async (notes: any[]) => {
  try {
    await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    return true;
  } catch (error) {
    console.log("saveNotes error:", error);
    return false;
  }
};

export const addNote = async (note: any) => {
  try {
    const notes = await getNotes();
    notes.push(note);
    return await saveNotes(notes);
  } catch (error) {
    console.log("addNote error:", error);
    return false;
  }
};

export const updateNote = async (updatedNote: any) => {
  try {
    const notes = await getNotes();

    const newNotes = notes.map((n: any) =>
      n.id === updatedNote.id ? updatedNote : n
    );

    return await saveNotes(newNotes);
  } catch (error) {
    console.log("updateNote error:", error);
    return false;
  }
};

export const deleteNote = async (id: string) => {
  try {
    const notes = await getNotes();

    const newNotes = notes.filter((n: any) => n.id !== id);

    return await saveNotes(newNotes);
  } catch (error) {
    console.log("deleteNote error:", error);
    return false;
  }
};
