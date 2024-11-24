import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, IconButton, Divider, Button } from "react-native-paper";
import StepperIndicator from "../../components/StepperIndicator";
import { validateField } from "./Validators";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackActions, useNavigation } from "@react-navigation/native";
import HotelInfoForm from "./SubScreens/HotelInfoForm";
import HotelLocationForm from "./SubScreens/HotelLocationForm";

const AddHotel = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    hotelName: "",
    totalRooms: "",
    floors: "",
    startingRent: "",
    landArea: "",
    tag: "",
    facility: "",
    tags: ["Beachfront", "Pet-Friendly"],
    facilities: ["Free WiFi", "Swimming Pool"],
    streetAddress: "",
    city: "",
    nearby_places: [],
    nearby_place:"",
    landmarks: [],
    mapLocation: null,
    landmark:""
  });

  const [formErrors, setFormErrors] = useState({});

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setFormErrors((prev) => ({ ...prev, [key]: validateField(key, value) }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (
        key !== "tags" &&
        key !== "facilities" &&
        key !== "tag" &&
        key !== "facility"
      ) {
        const error = validateField(key, formData[key]);
        if (error) {
          errors[key] = error;
        }
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <IconButton
          icon={"arrow-left"}
          size={24}
          onPress={() => {
            navigation.dispatch(StackActions.pop(1));
          }}
        />
        <Text style={styles.heading}>Add a Hotel</Text>
      </View>

      <Divider style={{ marginVertical: 5, height: 2 }} />

      {/* {currentStep === 1 && (
        <HotelInfoForm
          formData={formData}
          formErrors={formErrors}
          updateField={updateField}
        />
      )} */}

      {currentStep === 1 && (
        <HotelLocationForm
          formData={formData}
          formErrors={formErrors}
          updateField={updateField}
        />
      )}

      <View>
        <Divider style={{ marginVertical: 5, height: 2 }} />
        <StepperIndicator currentStep={currentStep} totalSteps={4} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {currentStep > 1 ? (
            <Button
              mode="outlined"
              onPress={() => setCurrentStep((prev) => prev - 1)}
              style={styles.button}
            >
              Back
            </Button>
          ) : null}
          {currentStep <= 3 ? (
            <Button mode="contained" onPress={handleNext} style={styles.button}>
              Next
            </Button>
          ) : null}
          {currentStep === 4 ? (
            <Button mode="contained" style={styles.button}>
              Finish
            </Button>
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginStart: -50,
  },
  button: {
    flex: 1,
    marginHorizontal: 2,
  },
});

export default AddHotel;
