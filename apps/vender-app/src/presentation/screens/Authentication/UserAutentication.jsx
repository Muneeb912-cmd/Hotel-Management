import React from "react";
import Heading from "../../components/Heading";
import {
  StyleSheet,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  useColorScheme,
} from "react-native";
import { Text } from "react-native-paper";
import UserAuthenticationForm from "../../components/UserAuthenticationForm";
import { useNavigation, CommonActions } from "@react-navigation/native";

const clearStackAndGoToHome = (navigation) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: "HomeScreen" }],
    })
  );
};

const UserAuthentication = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === "dark";
  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log("Sign Up API Called!");
  };

  const handleLogin = () => {
    console.log("Login API Called!");
    clearStackAndGoToHome(navigation);
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headingContainer}>
          <Image
            source={
              isDarkTheme
                ? require("../../../../assets/app_splash_dark.png")
                : require("../../../../assets/app_splash.png")
            }
            style={styles.image}
          />
          <Heading title={"Hotel Management"} />
          <Text>Your hotel management partner!</Text>
        </View>
        <UserAuthenticationForm  handleLogin={handleLogin} handleSignUp={handleSignUp}/>
        <Text style={styles.footerText}>Copyright © 2024 | Duko Devs</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UserAuthentication;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
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
