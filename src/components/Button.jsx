import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { func, shape, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonCotainer, style]}>
      <Text style={styles.buttonLabel} onPress={onPress}>{label}</Text>
    </TouchableOpacity>
  );
}
Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape(),
};
Button.defaultProps = {
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  buttonCotainer: {
    backgroundColor: '#467fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
