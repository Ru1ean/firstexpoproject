import React from 'react';
import { View, Button, Alert } from 'react-native';

export default function AppButton() {
  return (
    <View style={{ marginTop: 50 }}>
      <Button
        title="Clickss Me"
        onPress={() => Alert.alert("Button Pressed")}
        color="blue"
      />
    </View>
  );
}