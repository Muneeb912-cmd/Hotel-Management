
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar,Text } from 'react-native-paper';

const StepperIndicator = ({ currentStep, totalSteps }) => {
  const progress = currentStep / totalSteps;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Step {currentStep} of {totalSteps}</Text>
      <ProgressBar progress={progress} style={styles.progressBar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  text: {
    marginBottom: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
});

export default StepperIndicator;
