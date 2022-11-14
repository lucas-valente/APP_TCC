import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { EnqueteScreen } from '../Screens/Enquete';
import { HomeScreen } from '../Screens/Home';
import { PostsScreen } from '../Screens/Post';

const { Navigator, Screen } = createBottomTabNavigator();

export function Tab() {
    return (
        <Navigator>
            <Screen name="Home" component={HomeScreen} />
            <Screen name="Enquete" component={EnqueteScreen} />
            <Screen name="Posts" component={PostsScreen} />
        </Navigator>
    );
}