import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MessageBubble({ text, time, isMine }) {
  return (
    <View
      style={[
        styles.messageBubble,
        isMine ? styles.myMessage : styles.theirMessage,
      ]}
    >
      <Text style={styles.messageText}>{text}</Text>
      <Text style={styles.messageTime}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageBubble: {
    maxWidth: "75%",
    marginVertical: 6,
    padding: 10,
    borderRadius: 12,
  },
  myMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#dcf8c6",
  },
  theirMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  messageTime: {
    fontSize: 10,
    color: "#555",
    alignSelf: "flex-end",
    marginTop: 4,
  },
});
