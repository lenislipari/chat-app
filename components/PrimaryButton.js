import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrimaryButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6A0DAD",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
