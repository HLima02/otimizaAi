import { AppProvider } from '@/context/AppContext';
import { Stack } from "expo-router";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="addressList" options={{ headerShown: false }} />
        </Stack>
      </AppProvider>
    </GestureHandlerRootView>
  );
}
