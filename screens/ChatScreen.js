import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import specificChatsData from '../mocks/specificChats.json';
import { parseChatTimes } from '../utils/parseChatTimes';


export default function ChatScreen({ route }) {
  const { contact } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const chat = specificChatsData.specificChats.find(
      (chat) => chat.contact === contact
    );
  
    if (chat) {
      const formattedMessages = chat.messages.map((msg, index) => ({
        _id: index + 1,
        text: msg.content,
        createdAt: parseChatTimes(msg.time),
        user: {
          _id: msg.sender === 'You' ? 1 : 2,
          name: msg.sender
        }
      })).reverse();
  
      setMessages(formattedMessages);
    }
  }, [contact]);
  

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
        name: 'You'
      }}
    />
  );
}