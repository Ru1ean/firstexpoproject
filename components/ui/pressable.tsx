import React from 'react';
import { View, Text, Alert, Pressable, StyleSheet } from 'react-native';

export default function AppPressable() {
  const onPressFunction = () => {
    Alert.alert("Pressable Pressed");
  };
    const onLongPressFunction = () => {
    Alert.alert("you long press this nigga bitch");
  };
      const onPressIn = () => {
    Alert.alert("you just pressed this");
  };


  return (
    <View style={styles.container}>
      <Pressable style={styles.button} 
      onPress={onPressFunction}
      >
        <Text style={styles.text}>press me out</Text>
      </Pressable>


      <Pressable 
      style={styles.button}
      onLongPress={onLongPressFunction}
      delayLongPress={1000}
      >
        <Text style={styles.text}>long press me</Text>
      </Pressable>

      <Pressable 
      style={styles.button}
      onPressIn={onPressIn}
      >
        <Text style={styles.text}>press in</Text>
      </Pressable>
<Pressable
  style={[styles.button, { backgroundColor: '#aaa' }]}
  disabled={true}
>
  <Text style={styles.text}>im disabled</Text>
</Pressable>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0099ff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});