import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="jak/jakres" options={{ headerTitle: 'JakRespons' }}/>
        <Stack.Screen name="jak/jakwar" options={{ headerTitle: 'JakWarta' }}/>
        <Stack.Screen name="jak/jakpan" options={{ headerTitle: 'JakPangan' }}/>
        <Stack.Screen name="jak/detail" options={{ headerTitle: 'Detail' }}/>
        <Stack.Screen name="jak/jaksi" options={{ headerTitle: 'JakSiaga' }}/>
        <Stack.Screen name="jak/jaklain" options={{ headerTitle: 'Jaklinko' }}/>
        <Stack.Screen name="jak/jakper" options={{ headerTitle: 'Perbaikan' }}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
