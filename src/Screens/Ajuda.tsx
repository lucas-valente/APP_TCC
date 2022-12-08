import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'native-base';
import { useContext } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LanguageContext } from '../Contexts/LanguageProvider';

import Map from '../assets/img/map.png';

export const AjudaScreen = () => {

    const { texts, toggleLanguagePortuguese } = useContext(LanguageContext)

    return (
        <LinearGradient
            colors={['#44DD9D', '#142F47']}
            style={styles.linearGradient}
        >
            <View style={styles.content}>

                <Text style={styles.header}>{texts?.ajuda?.header}</Text>

                <View style={{ alignItems: 'center', marginTop: '10%' }}>
                    <Text style={styles.titulo}> {texts.ajuda.titulo} </Text>
                    <Text style={styles.telefone}> {texts.ajuda.telefone} </Text>
                    <Text style={styles.email}> {texts.ajuda.email} </Text>
                    <Text style={styles.link}> {texts.ajuda.link} </Text>
                </View>

                <View style={styles.map}>

                    <View style={styles.mapTextContent}>
                        <Text style={styles.TextTitleMap}>{texts.enquete.mapText.title}</Text>
                        <Text style={styles.TextSubTitleMap}>{texts.enquete.mapText.subTitle}</Text>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => { Linking.openURL('https://www.google.com.br/maps/place/R.+Des.+Westphalen,+15+-+13%C2%BA+andar+-+Centro,+Curitiba+-+PR,+80010-110/@-25.4329612,-49.2747341,17z/data=!3m1!4b1!4m5!3m4!1s0x94dce46d0d96bfbb:0x8a10693cf4f8fe2!8m2!3d-25.4329661!4d-49.2725454'); }}
                    >
                        <Image source={Map} alt='Map' style={styles.mapImg} />

                    </TouchableOpacity>

                </View>

            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingVertical: 10
    },
    header: {
        color: 'white',
        fontSize: 45,
        paddingTop: 20,
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    content: {
        alignItems: 'center',
    },
    titulo: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    telefone: {
        color: 'white',
        fontSize: 25,
        marginTop: 15

    },
    email: {
        color: 'white',
        fontSize: 25,
        marginTop: 15

    },
    link: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        marginTop: '10%',

    },
    map: {
        marginTop: '10%',
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: 4
    },
    mapImg: {
        marginTop: 20
    },
    mapTextContent: {
        alignItems: 'center'
    },
    TextTitleMap: {
        fontSize: 32,
        color: 'white'
    },
    TextSubTitleMap: {
        fontSize: 15,
        color: 'white'
    }
})