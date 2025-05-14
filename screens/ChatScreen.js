import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import specificChatsData from "../mocks/specificChats.json";
import { Ionicons } from "@expo/vector-icons";
import chatStyles from "../styles/chatScreen.styles";
import DismissKeyboardWrapper from "../components/DismissKeyboardWrapper";
import MessageBubble from "../components/MessageBubble";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ChatScreen({ route, navigation }) {
  const { contact } = route.params;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const insets = useSafeAreaInsets();

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "You",
    };

    setMessages((prev) => [newMessage, ...prev]);
    setInputText("");
  };

  const renderItem = ({ item }) => (
    <MessageBubble
      text={item.text}
      time={item.time}
      isMine={item.sender === "You"}
    />
  );

  useEffect(() => {
    const chat = specificChatsData.specificChats.find(
      (chat) => chat.contact === contact
    );

    if (chat) {
      const formattedMessages = chat.messages.map((msg, index) => ({
        id: index.toString(),
        text: msg.content,
        time: msg.time,
        sender: msg.sender,
      }));

      setMessages(formattedMessages.reverse());
    }
  }, [contact]);

  return (
    <DismissKeyboardWrapper>
      <KeyboardAvoidingView
        style={[
          chatStyles.container,
          { paddingTop: insets.top, paddingBottom: insets.bottom },
        ]}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={chatStyles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={chatStyles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={chatStyles.headerTitle}>{contact}</Text>
        </View>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          inverted
          contentContainerStyle={{ padding: 10 }}
        />

        <View style={chatStyles.inputContainer}>
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            placeholder="Escribe un mensaje"
            style={chatStyles.input}
          />
          <TouchableOpacity onPress={handleSend} style={chatStyles.sendButton}>
            <Text style={chatStyles.sendText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboardWrapper>
  );
}
