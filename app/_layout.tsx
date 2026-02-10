import { AppProvider } from '@/context/AppContext';
import { Stack } from "expo-router";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(root)" options={{ headerShown: false }} />
          </Stack>
        </AppProvider>
      </GestureHandlerRootView>
    </ClerkProvider>
    
  );
}
