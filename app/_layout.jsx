import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';

const RootLayout = () => {

  const [ fontsLoaded, error ] = useFonts({
    "Aventa-Regular": require('../assets/fonts/Aventa/Aventa-Regular.otf'),
    "Aventa-Medium": require('../assets/fonts/Aventa/Aventa-Medium.otf'),
    "Aventa-SemiBold": require('../assets/fonts/Aventa/Aventa-SemiBold.otf'),
    "Aventa-Bold": require('../assets/fonts/Aventa/Aventa-Bold.otf'),
    "Aventa-Black": require('../assets/fonts/Aventa/Aventa-Black.otf'),
    "Brandon-Medium": require('../assets/fonts/Brandon/Brandon-Medium.otf'),
    "Brandon-Black": require('../assets/fonts/Brandon/Brandon-Black.otf'),
    "Syne-SemiBold": require('../assets/fonts/Syne-SemiBold.ttf'),
     "Text-Security-Disk": require('../assets/fonts/text-security-disc.ttf'),
  })

  useEffect(() => {
    if (error) throw error;

  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <Stack
      screenOptions={{
        headerShown: false,

        headerStyle:{
          backgroundColor: '#F2F6F6',
        },
        headerShadowVisible: false,
        contentStyle:{
          backgroundColor: '#F2F6F6',
          paddingTop: 16,
          paddingHorizontal: 24
        }
      }}
    />
  )
}

export default RootLayout
