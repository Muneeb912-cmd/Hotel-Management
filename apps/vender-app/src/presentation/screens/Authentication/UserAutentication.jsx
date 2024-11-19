import React from "react";
import Heading from "../../components/Heading";
import {
  StyleSheet,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import {Text} from "react-native-paper"
import UserAuthenticationForm from "../../components/UserAuthenticationForm";



const UserAuthentication = () => {
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
        <View style={styles.headingContainer}>
          <Image
            source={require("../../../../assets/app_splash.png")}
            style={styles.image}
          />
          <Heading title={"Hotel Management"} />
          <Text>Your hotel management partner!</Text>
        </View>
        <UserAuthenticationForm />
        <Text style={styles.footerText}>Copyright © 2024 | Duko Devs</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserAuthentication;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding:10
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 50,
  },
  headingContainer: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  footerText: {
    textAlign: "center",
    fontSize: 12,
    color: "#888",
    marginTop: 20,
  },
});
