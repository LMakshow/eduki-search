/* eslint-disable react/react-in-jsx-scope */
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { APIProvider } from '@/api';
import { useThemeConfig } from '@/core/use-theme-config';

export { ErrorBoundary } from 'expo-router';

// Import  global CSS file
import '../../global.css';

import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

import { type ColorSchemeType, SELECTED_THEME } from '@/core';
import { storage } from '@/core/storage';

export const unstable_settings = {
  initialRouteName: 'index',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Providers>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </Providers>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  const theme = useThemeConfig();
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    const savedTheme = storage.getString(SELECTED_THEME);
    if (savedTheme !== undefined) {
      setColorScheme(savedTheme as ColorSchemeType);
    }
  }, [setColorScheme]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider value={theme}>
        <APIProvider>
          <BottomSheetModalProvider>
            {children}
            <FlashMessage position="top" />
          </BottomSheetModalProvider>
        </APIProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
