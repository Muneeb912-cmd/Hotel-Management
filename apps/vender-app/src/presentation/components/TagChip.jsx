
import React from 'react';
import { StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';

const TagChip = ({ label, onDelete }) => {
  return (
    <Chip style={styles.chip} onClose={onDelete}>
      {label}
    </Chip>
  );
};

const styles = StyleSheet.create({
  chip: {
    margin: 4,
  },
});

export default TagChip;
