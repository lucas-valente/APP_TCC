import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { TabRoute } from './tabs';

export function Routes() {
    return (
        <NavigationContainer>
            <TabRoute />
        </NavigationContainer>
    );
}