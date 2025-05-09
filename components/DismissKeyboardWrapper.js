import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

export default function DismissKeyboardWrapper({ children }) {
  if (Platform.OS === "web") return children;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      {children}
    </TouchableWithoutFeedback>
  );
}
