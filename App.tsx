import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { decode, encode } from 'base-64';
import * as React from 'react';
import { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NativeBaseProvider } from 'native-base';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

import {
  Overlock_400Regular,
  Overlock_400Regular_Italic,
  Overlock_700Bold,
  Overlock_700Bold_Italic,
  Overlock_900Black,
  Overlock_900Black_Italic, useFonts
} from '@expo-google-fonts/overlock';

import LanguageContextProvider, { LanguageContext } from './src/Contexts/LanguageProvider';
import { Routes } from './src/Routes';

const Tab = createBottomTabNavigator();

export default function App() {

  const { texts } = useContext(LanguageContext)

  let [fontsLoaded] = useFonts({
    Overlock_400Regular,
    Overlock_400Regular_Italic,
    Overlock_700Bold,
    Overlock_700Bold_Italic,
    Overlock_900Black,
    Overlock_900Black_Italic,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <LanguageContextProvider>
          <Routes />
        </LanguageContextProvider>
      </NativeBaseProvider>
    </SafeAreaView>

  );
}
