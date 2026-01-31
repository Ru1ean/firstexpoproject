import { Image } from 'expo-image';
import { Platform, StyleSheet,ImageBackground } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import AppButton from '@/components/ui/button';
import AppPressable from '@/components/ui/pressable';
import  AppInput from '@/components/ui/input';
import AppScrool from '@/components/ui/scrool';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = require('../../assets/images/babu.jpg');

export default function HomeScreen() {
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#ffffff', dark: '#f8b600' }}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
              <AppButton />
              <AppPressable />
          </ImageBackground>
      </ParallaxScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
