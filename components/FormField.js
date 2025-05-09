import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FormField({
  label,
  icon,
  placeholder,
  value,
  onChangeText,
  onBlur,
  error,
  secureTextEntry = false,
  rightIcon,
  style = {},
}) {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={22}
            color="#777"
            style={styles.icon}
          />
        )}
        <TextInput
          style={[styles.input, style]}
          placeholder={placeholder}
          placeholderTextColor="#aaa"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 6,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    paddingVertical: 4,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
