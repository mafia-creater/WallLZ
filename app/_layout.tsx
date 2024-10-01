import { Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{headerShown:false}}/>
    </GestureHandlerRootView>
  );
}