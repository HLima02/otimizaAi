import { AppProvider } from '@/context/AppContext';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="addressList" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
    
  );
}
