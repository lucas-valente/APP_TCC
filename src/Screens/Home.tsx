import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LanguageContext } from '../Contexts/LanguageProvider';

export function HomeScreen() {

    const { texts } = useContext(LanguageContext)

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}
            >
                <Text>{texts.home.header}</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%'
    },
})