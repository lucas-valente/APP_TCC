import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { useContext, useEffect } from 'react';

import { AjudaScreen } from '../Screens/Ajuda';
import { EnqueteScreen } from '../Screens/Enquete';
import { HomeScreen } from '../Screens/Home';
import { ModalIdiomaScreen } from '../Screens/Idioma';

import IconEnquete from '../assets/img/enquete.svg';
import IconAjuda from '../assets/img/helpIcon.svg';
import IconHome from '../assets/img/home.svg';
import IconIdioma from '../assets/img/Idioma.svg';

import { LanguageContext } from '../Contexts/LanguageProvider';

const Tab = createBottomTabNavigator();

export function TabRoute() {

    const { texts, toggleLanguage } = useContext(LanguageContext)

    useEffect(() => {
        return toggleLanguage()// configura o idioma padrão
    }, [])

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarInactiveTintColor: 'rgba(0, 0, 0, 0.6)', tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' }, tabBarStyle: { backgroundColor: '#f1f1f1' } }}>

            <Tab.Screen name="HOME" component={HomeScreen} options={{ tabBarIcon: ({ focused }) => <IconHome opacity={focused ? 1 : 0.7} width={focused ? 35 : 30} height={focused ? 35 : 30} />, tabBarLabel: texts?.tabBarLabel?.home?.header || 'HOME' }} />

            <Tab.Screen name='ENQUETE' component={EnqueteScreen} options={{ tabBarIcon: ({ focused }) => <IconEnquete color='#104949' opacity={focused ? 1 : 0.7} width={focused ? 30 : 20} height={focused ? 30 : 30} />, tabBarLabel: texts?.tabBarLabel?.enquete?.header || 'ENQUETE' }} />

            <Tab.Screen name="IDIOMA" component={ModalIdiomaScreen} options={{ tabBarIcon: ({ focused }) => <IconIdioma opacity={focused ? 1 : 0.7} width={focused ? 30 : 25} height={focused ? 30 : 25} />, tabBarLabel: texts?.tabBarLabel?.idioma?.header || 'IDIOMA' }} />

            <Tab.Screen name="AJUDA" component={AjudaScreen} options={{ tabBarIcon: ({ focused }) => <IconAjuda opacity={focused ? 1 : 0.7} width={focused ? 30 : 25} height={focused ? 30 : 25} />, tabBarLabel: texts?.tabBarLabel?.ajuda?.header || 'AJUDA' }} />

        </Tab.Navigator>
    );
}