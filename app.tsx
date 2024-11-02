import '@/styles/global.css'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'

import { Text,  StatusBar } from 'react-native'
import { Center } from '@/components/ui/center'
import { Loading } from '@/components/loading'
import { SignIn } from '@/screens/auth/sign-in'
export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <GluestackUIProvider mode="light">
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
     <SignIn />
    </GluestackUIProvider>
  )
}
