import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import TagChip from "../../../components/TagChip";
import ErrorText from "../../../components/ErrorText";



const HotelInfoForm = ({ formData, formErrors, updateField }) => {
  const addItem = (key, valueKey, valueList) => {
    if (formData[valueKey].trim()) {
      updateField(valueList, [...formData[valueList], formData[valueKey]]);
      updateField(valueKey, ""); // Clear input
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        label="Hotel Name"
        value={formData.hotelName}
        onChangeText={(value) => updateField("hotelName", value)}
        error={!!formErrors.hotelName}
        style={styles.input}
        mode={"outlined"}
      />
      {!!formErrors.hotelName&&<ErrorText error_msg={formErrors.hotelName}/>}
      <TextInput
        label="Total Rooms"
        value={formData.totalRooms}
        onChangeText={(value) => updateField("totalRooms", value)}
        keyboardType="number-pad"
        error={!!formErrors.totalRooms}
        style={styles.input}
        mode={"outlined"}
      />
      {!!formErrors.totalRooms&&<ErrorText error_msg={formErrors.totalRooms}/>}
      <TextInput
        label="Floors"
        value={formData.floors}
        onChangeText={(value) => updateField("floors", value)}
        keyboardType="number-pad"
        error={!!formErrors.floors}
        style={styles.input}
        mode={"outlined"}
      />
      {!!formErrors.floors&&<ErrorText error_msg={formErrors.floors}/>}
      <TextInput
        label="Starting Rent"
        value={formData.startingRent}
        onChangeText={(value) => updateField("startingRent", value)}
        keyboardType="number-pad"
        error={!!formErrors.startingRent}
        style={styles.input}
        mode={"outlined"}
      />
      {!!formErrors.startingRent&&<ErrorText error_msg={formErrors.startingRent}/>}
      <TextInput
        label="Hotel Land Area (sq meter)"
        value={formData.landArea}
        onChangeText={(value) => updateField("landArea", value)}
        keyboardType="number-pad"
        error={!!formErrors.landArea}
        style={styles.input}
        mode={"outlined"}
      />
      {!!formErrors.landArea&&<ErrorText error_msg={formErrors.landArea}/>}
      <Text style={styles.sectionTitle}>Tags</Text>
      <View style={styles.row}>
        <TextInput
          label="Add Tag"
          value={formData.tag}
          onChangeText={(value) => updateField("tag", value)}
          style={[styles.input, { flex: 1 }]}
          error={formData.tags.length<=0}
          mode={"outlined"}
        />
        <Button
          mode="contained"
          onPress={() => addItem("tag", "tag", "tags")}
          style={styles.button}
        >
          Add
        </Button>
      </View>
      {formData.facilities.length<=0&&<ErrorText error_msg={"There should be atleast one tag"}/>}
      <View style={styles.chipContainer}>
        {formData.tags.map((item, index) => (
          <TagChip
            key={index}
            label={item}
            onDelete={() =>
              updateField("tags", formData.tags.filter((t) => t !== item))
            }
          />
        ))}
      </View>
      <Text style={styles.sectionTitle}>Facilities</Text>
      <View style={styles.row}>
        <TextInput
          label="Add Facility"
          value={formData.facility}
          onChangeText={(value) => updateField("facility", value)}
          style={[styles.input, { flex: 1 }]}
          error={formData.facilities.length<=0}
          mode={"outlined"}
        />
        <Button
          mode="contained"
          onPress={() => addItem("facility", "facility", "facilities")}
          style={styles.button}
        >
          Add
        </Button>
      </View>
      {formData.facilities.length<=0&&<ErrorText error_msg={"There should be atleast one facility"}/>}
      <View style={styles.chipContainer}>
        {formData.facilities.map((item, index) => (
          <TagChip
            key={index}
            label={item}
            onDelete={() =>
              updateField(
                "facilities",
                formData.facilities.filter((f) => f !== item)
              )
            }
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginLeft: 8,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 8,
  },
});

export default HotelInfoForm;
