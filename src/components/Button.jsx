import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { string } from 'prop-types';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonCotainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}
Button.propTypes = {
  label: string.isRequired,
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
