import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useContext } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import IconArrowBack from '../assets/img/arrowBack.svg';

import BrasilIcon from '../assets/img/IconBrasil.png';
import UsaIcon from '../assets/img/IconUsa.png';
import Logo2 from '../assets/img/lg2.png';

import { LanguageContext } from '../Contexts/LanguageProvider';

export function ModalIdiomaScreen() {

    const { language, toggleLanguageP, toggleLanguageI } = useContext(LanguageContext)

    const navigation = useNavigation()

    function openScreen() {
        navigation.navigate('HOME')
    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}
            >
                <View style={{ padding: 3 }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={openScreen}
                    >
                        <View style={styles.touchableOpacityStyle}>
                            <IconArrowBack
                                width={25}
                                height={25}
                            />
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={styles.content}>

                    <Image source={Logo2} />

                    <Text style={styles.textHeader}>Migrantes Curitiba</Text>
                    <Text style={styles.TextDesc}>Select your language</Text>
                    <Text style={styles.TextDesc}>Selecione seu idioma</Text>

                    <View style={styles.contentimg}>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.touchableOpacityStyle}
                            onPress={toggleLanguageI}
                        >
                            <View style={styles.img}>
                                <Image source={UsaIcon} style={{ marginBottom: 30 }} />
                                <Text style={styles.TextDesc}>ENGLISH</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.touchableOpacityStyle}
                            onPress={toggleLanguageP}
                        >
                            <View style={styles.img}>
                                <Image source={BrasilIcon} style={{ marginBottom: 30 }} />
                                <Text style={styles.TextDesc}>PORTUGUESE</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.TextDesc}>{language}</Text>

                </View>

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
        width: '100%'
    },
    touchableOpacityStyle: {
        margin: 3
    },
    content: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',

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
    }
})