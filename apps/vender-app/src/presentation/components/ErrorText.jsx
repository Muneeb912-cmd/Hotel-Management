import React from "react";
import { Text } from "react-native-paper";

const ErrorText = ({ error_msg }) => {
  return (
    <Text style={{ color: "red", marginBottom: 5}}>
      {error_msg}
    </Text>
  );
};

export default ErrorText;
