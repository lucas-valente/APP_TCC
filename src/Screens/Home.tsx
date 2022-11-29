import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { CardPosts } from '../Components/CardPosts';
export function HomeScreen() {

    return (
        <LinearGradient
            colors={['#44DD9D', '#142F47']}
            style={styles.linearGradient}
        >
            <CardPosts />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
})