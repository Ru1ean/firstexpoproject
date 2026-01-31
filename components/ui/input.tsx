import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function AppInput() {
  const [text, onChangeText] = React.useState(' ');
  const [number, onChangeNumber] = React.useState(' ');

  return (
    <View style={{ marginTop: 50 }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='input something here'
        placeholderTextColor="#000000"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="input a number here"
        keyboardType="numeric"
        placeholderTextColor="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: '#eee',
  },
});