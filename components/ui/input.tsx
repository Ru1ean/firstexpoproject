import React from 'react';
import { View, TextInput, StyleSheet, Pressable, Text, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';//firebase

export default function AppInput() {
  const [fname, setFname] = React.useState('');
  const [mname, setMname] = React.useState('');
  const [lname, setLname] = React.useState('');

  const addUser = async () => {
    if (!fname.trim() || !lname.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      await firestore().collection('users').add({//firebase
        FirstName: fname,
        MiddleName: mname,
        LastName: lname,
      });
      Alert.alert('Success', 'User added successfully');
      setFname('');
      setMname('');
      setLname('');
    } catch (error) {
      Alert.alert('Error', 'Failed to add user');
      console.error(error);
    }
  };

  return (
    <View style={{ marginTop: 50 }}>
      <TextInput
        style={styles.input}
        onChangeText={setFname}
        value={fname}
        placeholder="Firstname"
        placeholderTextColor="#000000"
      />
      <TextInput
        style={styles.input}
        onChangeText={setMname}
        value={mname}
        placeholder="Middlename"
        placeholderTextColor="#000000"
      />

      <TextInput
        style={styles.input}
        onChangeText={setLname}
        value={lname}
        placeholder="Lastname"
        placeholderTextColor="#000000"
      />

      <Pressable style={styles.button} onPress={addUser}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
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
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    margin: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});