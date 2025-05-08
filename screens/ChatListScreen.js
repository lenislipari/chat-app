import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import chatsData from '../mocks/chats.json';
import { parseChatTimes } from '../utils/parseChatTimes';

export default function ChatListScreen({ navigation }) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const processedChats = chatsData.chats.map(chat => ({
      ...chat,
      timestamp: parseChatTimes(chat.lastMessageTime),
    }));

    const sortedChats = processedChats.sort((a, b) => b.timestamp - a.timestamp);
    setChats(sortedChats);
  }, []);

  const handleChatPress = (contact) => {
    navigation.navigate('Chat', { contact });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => handleChatPress(item.contact)}>
      <Text style={styles.contactName}>{item.contact}</Text>
      <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  chatItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#555',
  },
  lastMessageTime: {
    fontSize: 12,
    color: '#999',
    alignSelf: 'flex-end',
  },
});
