import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import chatsData from "../mocks/chats.json";
import chatListStyles from "../styles/chatListScreen.styles";
import ChatItem from "../components/ChatItem";
import sortChatsByTime from "../utils/sortChatsByTime";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatListScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredChats, setFilteredChats] = useState([]);
  const insets = useSafeAreaInsets();

  const handleChatPress = (contact) => {
    navigation.navigate("Chat", { contact });
  };

  const renderItem = ({ item }) => (
    <ChatItem
      avatar={item.avatar}
      name={item.contact}
      message={item.lastMessage}
      time={item.lastMessageTime}
      onPress={() => handleChatPress(item.contact)}
    />
  );

  useEffect(() => {
    const sorted = sortChatsByTime(chatsData.chats);
    setFilteredChats(sorted);
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = sortChatsByTime(
      chatsData.chats.filter((chat) =>
        chat.contact.toLowerCase().includes(lowerSearch)
      )
    );
    setFilteredChats(filtered);
  }, [search]);

  return (
    <View
      style={[
        chatListStyles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <Text style={chatListStyles.title}>Chats</Text>
      <TextInput
        style={chatListStyles.searchInput}
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
          <Text style={chatListStyles.noResults}>No contacts found</Text>
        }
      />
    </View>
  );
}
