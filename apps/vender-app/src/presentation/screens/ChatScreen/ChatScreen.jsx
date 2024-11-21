import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, TextInput, Text, Divider } from "react-native-paper";

const ChatScreen = ({ route, navigation }) => {
  const { user } = route.params; // Get user details from navigation
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const colorScheme = useColorScheme(); // Detect the theme (light or dark)

  // Time generation function
  var hours = new Date().getHours();
  var min = new Date().getMinutes();

  const setTime = () => {
    setCurrentTime(`${hours}:${min}`);
  };

  const onSend = () => {
    if (inputText.trim() === "") return;
    const newMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: "me",
    };
    setMessages([newMessage, ...messages]);
    setInputText(""); // Clear input
  };

  // Dummy data for other messages
  useEffect(() => {
    setMessages([
      { id: 1, text: "Hi there!", sender: "other" },
      { id: 2, text: "Hello, how are you?", sender: "me" },
      { id: 3, text: "I'm good, thanks! And you?", sender: "other" },
    ]);
    setTime();
  }, []);

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === "me" ? styles.myMessage : styles.otherMessage,
        { backgroundColor: colorScheme === "dark" ? "#333" : "#fff" }, // Background based on theme
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 5,
          justifyContent: "flex-end",
        }}
      >
        <Text style={styles.messageStatus}>
          {hours}:{min}
        </Text>
        <Text style={styles.messageStatus}>sent</Text>
      </View>
    </View>
  );

  const FooterComponent = () => {
    return (
      <View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "gray",
            marginVertical: 5,
          }}
        >
          {currentTime}
        </Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconButton icon={"arrow-left"} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{user.user_name}</Text>
        </View>
        <Divider style={{ height: 2 }} />
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id.toString()}
          inverted
          contentContainerStyle={styles.chatArea}
          ListFooterComponent={() => <FooterComponent />}
          ListFooterComponentStyle={{ justifyContent: "center" }}
        />

        <Divider style={{ height: 2, marginVertical: 5 }} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message"
            value={inputText}
            onChangeText={setInputText}
            mode="outlined"
            placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#888"} // Adjust placeholder color based on theme
          />
          <IconButton icon={"send"} mode="contained-tonal" onPress={onSend} />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Ensuring background can be styled dynamically based on theme
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1", // Header background
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Header text color
  },
  chatArea: {
    padding: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    maxWidth: "80%",
  },
  myMessage: {
    alignSelf: "flex-end",
    elevation: 10,
  },
  otherMessage: {
    alignSelf: "flex-start",
    elevation: 10,
  },
  messageText: {
    fontSize: 18,
  },
  messageStatus: {
    fontSize: 12,
    marginHorizontal: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textInput: {
    flex: 1,
    marginHorizontal: 10,
  },
  sendButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    fontSize: 16,
  },
});
