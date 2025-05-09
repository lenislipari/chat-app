import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function ChatItem({
  avatar,
  name,
  message,
  time,
  onPress,
  showIcon = true,
}) {
  return (
    <TouchableOpacity style={styles.chatItem} onPress={onPress}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.contactName}>{name}</Text>
          <Text style={styles.lastMessageTime}>{time}</Text>
        </View>
        <View style={styles.messageRow}>
          {showIcon && (
            <Icon
              name="check-all"
              size={16}
              color="#4fc3f7"
              style={styles.icon}
            />
          )}
          <Text style={styles.lastMessage} numberOfLines={1}>
            {message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
    justifyContent: "center",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  contactName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  lastMessage: {
    fontSize: 14,
    color: "#555",
    flexShrink: 1,
  },
  lastMessageTime: {
    fontSize: 12,
    color: "#999",
  },
  icon: {
    marginRight: 4,
  },
});
