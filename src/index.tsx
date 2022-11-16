import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { EnqueteScreen } from './Screens/Enquete'
import { HomeScreen } from './Screens/Home'

import IconEnquete from './assets/img/enquete.svg'
import IconHome from './assets/img/home.svg'
import IconIdioma from './assets/img/Idioma.svg'
import LanguageContextProvider from './Contexts/LanguageProvider'
import { ModalIdiomaScreen } from './Screens/Idioma'

import { LanguageContext } from './Contexts/LanguageProvider'

const Tab = createBottomTabNavigator();

export default function Main() {

    const { texts } = useContext(LanguageContext)

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <LanguageContextProvider>
                    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.6)', tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, tabBarStyle: { backgroundColor: '#f1f1f1' }, }}>

                        <Tab.Screen name='ENQUETE' component={EnqueteScreen} options={{ tabBarIcon: ({ focused }) => <IconEnquete color='#104949' opacity={focused ? 1 : 0.7} width={focused ? 30 : 20} height={focused ? 30 : 30} />, tabBarLabel: texts.tabBarLabel.enquete.header }} />

                        <Tab.Screen name="HOME" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => <IconHome opacity={focused ? 1 : 0.7} width={focused ? 35 : 30} height={focused ? 35 : 30} />, tabBarLabel: texts.tabBarLabel.home.header }} />

                        <Tab.Screen name="IDIOMA" component={ModalIdiomaScreen} options={{ tabBarIcon: ({ focused }) => <IconIdioma opacity={focused ? 1 : 0.7} width={focused ? 30 : 25} height={focused ? 30 : 25} />, tabBarStyle: { display: 'none' }, tabBarLabel: texts.tabBarLabel.idioma.header }} />

                    </Tab.Navigator>
                </LanguageContextProvider>
            </NavigationContainer>
        </SafeAreaView>

    );
}
