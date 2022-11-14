import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ModalIdiomaScreen() {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}
            >
                <Text>IDIOMA!</Text>
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