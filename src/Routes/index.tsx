import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { EnqueteScreen } from '../Screens/Enquete';
import { HomeScreen } from '../Screens/Home';
import { PostsScreen } from '../Screens/Post';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={HomeScreen} />
                <Screen name="Enquete" component={EnqueteScreen} />
                <Screen name="Posts" component={PostsScreen} />
            </Navigator>
        </NavigationContainer>
    );
}