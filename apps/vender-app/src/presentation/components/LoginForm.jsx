import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const LoginForm = (props) => {
  return (
    <View>
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

      <Button
        mode="contained"
        onPress={props.onSubmit}
        style={styles.button}
        disabled={props.isLoading}
      >
        Login
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

export default LoginForm;
