import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SignUpForm = (props) => {
  return (
    <View>
      <TextInput
        label="User Name"
        value={props.user.name}
        onChangeText={(text) => props.handleInputChange("name", text)}
        style={styles.input}
        error={!!props.errors.userName}
      />
      {props.errors.userName ? <Text style={styles.error}>{props.errors.userName}</Text> : null}

      <TextInput
        label="Email"
        value={props.user.email}
        onChangeText={(text) => props.handleInputChange("email", text)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        error={!!props.errors.email}
      />
      {props.errors.email ? <Text style={styles.error}>{props.errors.email}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          label="Password"
          value={props.user.password}
          onChangeText={(text) => props.handleInputChange("password", text)}
          style={styles.input}
          secureTextEntry={!props.showPassword}
          error={!!props.errors.password}
        />
        <TouchableOpacity
          onPress={() => props.setShowPassword(!props.showPassword)}
          style={styles.toggleIcon}
        >
          <Ionicons
            name={props.showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {props.errors.password ? <Text style={styles.error}>{props.errors.password}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          label="Confirm Password"
          value={props.confirmPassword}
          onChangeText={(text) => props.setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry={!props.showConfirmPassword}
          error={!!props.errors.confirmPassword}
        />
        <TouchableOpacity
          onPress={() => props.setShowConfirmPassword(!props.showConfirmPassword)}
          style={styles.toggleIcon}
        >
          <Ionicons
            name={props.showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {props.errors.confirmPassword ? (
        <Text style={styles.error}>{props.errors.confirmPassword}</Text>
      ) : null}

      <Button
        mode="contained"
        onPress={props.onSubmit}
        style={styles.button}
        disabled={props.isLoading}
      >
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
  },
  inputContainer: {
    position: "relative",
  },
  toggleIcon: {
    position: "absolute",
    right: 10,
    top: 19,
  },
});

export default SignUpForm;
