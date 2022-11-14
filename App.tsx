import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { EnqueteScreen } from './src/Screens/Enquete'
import { HomeScreen } from './src/Screens/Home'


import IconEnquete from './assets/enquete.svg'
import IconHome from './assets/home.svg'
import IconIdioma from './assets/Idioma.svg'
import { ModalIdiomaScreen } from './src/Screens/ModalIdioma'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.8)' }}>
        <Tab.Screen name="ENQUETE" component={EnqueteScreen} options={{ tabBarIcon: ({ focused }) => <IconEnquete width={focused ? 35 : 30} height={focused ? 35 : 30} /> }} />
        <Tab.Screen name="HOME" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => <IconHome width={focused ? 35 : 30} height={focused ? 35 : 30} /> }} />
        <Tab.Screen name="IDIOMA" component={ModalIdiomaScreen} options={{ tabBarIcon: ({ focused }) => <IconIdioma width={focused ? 35 : 30} height={focused ? 35 : 30} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}