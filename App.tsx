import { NativeBaseProvider, StatusBar } from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import {THEME} from './src/styles/theme'

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {SignIn} from './src/Screens/SignIn'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  
  
  return (
    <NativeBaseProvider theme = {THEME}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor='transparent'
      translucent/>


     {fontsLoaded ? <SignIn/> : <Loading/>}
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
