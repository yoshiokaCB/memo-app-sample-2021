import React from 'react';
import {
  StyleSheet, View, TextInput,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/keyboardSafeView';

export default function MemoEditScreen() {
  return (
    // <KeyboardAvoidingView style={styles.container} behavior="height">
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="お買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
