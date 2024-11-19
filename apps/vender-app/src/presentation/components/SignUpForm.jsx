import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const SignUpForm = ({
  user,
  handleInputChange,
  errors,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
  isLoading,
  onSubmit
}) => {
  return (
    <View>
      <TextInput
        label="User Name"
        value={user.name}
        onChangeText={(text) => handleInputChange("name", text)}
        style={styles.input}
        error={!!errors.userName}
      />
      {errors.userName ? <Text style={styles.error}>{errors.userName}</Text> : null}

      <TextInput
        label="Email"
        value={user.email}
        onChangeText={(text) => handleInputChange("email", text)}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        error={!!errors.email}
      />
      {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          label="Password"
          value={user.password}
          onChangeText={(text) => handleInputChange("password", text)}
          style={styles.input}
          secureTextEntry={!showPassword}
          error={!!errors.password}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.toggleIcon}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}

      <View style={styles.inputContainer}>
        <TextInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          style={styles.input}
          secureTextEntry={!showConfirmPassword}
          error={!!errors.confirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.toggleIcon}
        >
          <Ionicons
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {errors.confirmPassword ? (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      ) : null}

      <Button
        mode="contained"
        onPress={onSubmit}
        style={styles.button}
        disabled={isLoading}
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
