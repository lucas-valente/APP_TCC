import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import BrasilIcon from '../assets/img/IconBrasil.png';
import UsaIcon from '../assets/img/IconUsa.png';
import Logo from '../assets/img/lg2.png';

import { LanguageContext } from '../Contexts/LanguageProvider';
import { languages } from '../Data/idiomas';

export function ModalIdiomaScreen() {

    const { language, toggleLanguage } = useContext(LanguageContext)

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}
            >
                <ScrollView style={{ width: '100%' }}>

                    <View style={styles.content}>

                        <Image source={Logo} />

                        <Text style={styles.textHeader}>Migrantes Curitiba</Text>
                        <Text style={styles.TextDesc}>Select your language</Text>
                        <Text style={styles.TextDesc}>Selecione seu idioma</Text>

                        <View style={styles.contentimg}>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.touchableOpacityStyle}
                                onPress={() => (toggleLanguage(languages.enUs))}
                            >
                                <View style={styles.img}>
                                    <Image source={UsaIcon} style={{ marginBottom: 30 }} />
                                    <Text style={styles.TextDesc}>{languages.enUs.toUpperCase()}</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.touchableOpacityStyle}
                                onPress={() => (toggleLanguage(languages.ptBr))}
                            >
                                <View style={styles.img}>
                                    <Image source={BrasilIcon} style={{ marginBottom: 30 }} />
                                    <Text style={styles.TextDesc}>{languages.ptBr.toUpperCase()}</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.language}>{language}</Text>

                    </View>

                </ScrollView>
            </LinearGradient>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        flex: 1,
        width: '100%',
        paddingVertical: 15
    },
    touchableOpacityStyle: {
        margin: 3
    },
    content: {
        flex: 1,
        alignItems: 'center'

    },
    textHeader: {
        color: 'white',
        fontSize: 40,
        marginBottom: 33,
        fontFamily: 'Overlock_400Regular',
    },
    TextDesc: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Overlock_400Regular'
    },
    contentimg: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'baseline',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    img: {
        alignItems: 'center',
    },
    language: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'Overlock_400Regular',
        marginTop: 5
    },
})