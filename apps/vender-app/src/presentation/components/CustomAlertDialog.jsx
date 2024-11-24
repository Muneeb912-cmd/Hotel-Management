import * as React from "react";
import { View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
} from "react-native-paper";

const CustomAlertDialog = (props) => {
  return (
    <View>
      <Portal>
        <Dialog visible={props.visible} dismissable={false}>
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{props.content}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={props.hideDialog}>Cancel</Button>
            <Button onPress={props.action}>Confirm</Button>
          </Dialog.Actions>
     </Dialog>
      </Portal>
    </View>
  );
};

export default CustomAlertDialog;
