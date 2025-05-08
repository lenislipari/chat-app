import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import chatsData from "../mocks/chats.json";


export default function ChatListScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredChats, setFilteredChats] = useState([]);

  useEffect(() => {
    setFilteredChats(chatsData.chats);
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = chatsData.chats.filter((chat) =>
      chat.contact.toLowerCase().includes(lowerSearch)
    );
    setFilteredChats(filtered);
  }, [search]);

  const handleChatPress = (contact) => {
    navigation.navigate("Chat", { contact });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => handleChatPress(item.contact)}
    >
      <Image
        source={{ uri: item.avatar }}
        style={styles.avatar}
      />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.contactName}>{item.contact}</Text>
          <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
        </View>
        <View style={styles.messageRow}>
          <Icon
            name="check-all"
            size={16}
            color="#4fc3f7"
            style={styles.icon}
          />
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
    <Text style={styles.title}>Chats</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contact..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={
          <Text style={styles.noResults}>No contacts found</Text>
        }
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    marginBottom: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D0B8E0",
    borderRadius: 20,
    backgroundColor: "#f9f9f9",
  },
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
  noResults: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    fontSize: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6A0DAD',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
