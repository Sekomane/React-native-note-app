import { TextInput } from "react-native";

export default function SearchBar({ value, onChange }: any) {
  return (
    <TextInput
      placeholder="Search..."
      style={{ borderWidth: 1, padding: 10, margin: 10 }}
      value={value}
      onChangeText={onChange}
    />
  );
}
