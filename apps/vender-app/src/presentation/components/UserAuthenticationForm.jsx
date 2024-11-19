import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Card, Text, Divider } from "react-native-paper";
import { Button, Icon } from "@rneui/themed";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import UserModel from "../../domain/models/UserModel"
import { useNavigation, CommonActions } from "@react-navigation/native";
import { validateEmail, validatePassword, validateUsername } from "./Validators";

const UserAuthenticationForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [user, setUser] = useState(new UserModel("", "", "", "", "", ""));
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
      email: "",
      password: "",
      userName: "",
      confirmPassword: "",
    });
    const navigation = useNavigation();
  
    const handleAuthToggle = () => {
      setErrors({
        email: "",
        password: "",
        userName: "",
        confirmPassword: "",
      });
      setIsSignUp(!isSignUp);
    };
  
    const validateFields = () => {
      let valid = true;
      let newErrors = {};
  
      if (!validateEmail(user.email)) {
        newErrors.email = "Please enter a valid email address.";
        valid = false;
      }
  
      if (isSignUp && !validateUsername(user.name)) {
        newErrors.userName = "Please enter a valid username.";
        valid = false;
      }
  
      if (!user.password) {
        newErrors.password = "Password cannot be empty";
        valid = false;
      } else if (!validatePassword(user.password)) {
        newErrors.password = "Password must be at least 8 characters.";
        valid = false;
      }
  
      if (isSignUp && confirmPassword !== user.password) {
        newErrors.confirmPassword = "Passwords do not match.";
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleInputChange = (field, value) => {
      setUser((prevUser) => ({ ...prevUser, [field]: value }));
      if (errors[field]) setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    };
  
    const handleSignUp = () => {
      if (validateFields()) {
        console.log("Sign Up submitted!");
        // handle sign up logic here
      }
    };
  
    const handleLogin = () => {
      if (validateFields()) {
        console.log("Login submitted!");
        // handle login logic here
      }
    };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Welcome Back!</Text>
          {isSignUp ? (
            <SignUpForm
              user={user}
              handleInputChange={handleInputChange}
              errors={errors}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
              isLoading={isLoading}
              onSubmit={handleSignUp}
            />
          ) : (
            <LoginForm
              user={user}
              handleInputChange={handleInputChange}
              errors={errors}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              isLoading={isLoading}
              onSubmit={handleLogin}
            />
          )}
          <View style={styles.dividerContainer}>
            <Divider style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <Divider style={styles.divider} />
          </View>
          <Button type="outline" onPress={() => console.log("Pressed")}>
            <Image
              source={require("../../../assets/google.png")}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>{isSignUp ? "Create Account" : "Login with Google"}</Text>
          </Button>

          <View style={styles.toggleContainer}>
            <Text>
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </Text>
            <Button onPress={handleAuthToggle} type="clear">
              {isSignUp ? "Login" : "Sign Up"}
            </Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default UserAuthenticationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  divider: {
    marginVertical: 20,
  },
  toggleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  socialButtonText: {
    fontSize: 16,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  divider: {
    flex: 1,
    marginVertical:20
  },
  dividerText: {
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold", // Customize text style
    color: "gray", // Customize text color
  },
});
