import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Text, View, StatusBar } from 'react-native';

export default function App() {


 const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <View >
    <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent" translucent />
      <Text>Home</Text>
    </View>
  );
}

