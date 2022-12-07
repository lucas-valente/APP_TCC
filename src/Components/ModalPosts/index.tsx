import { Image } from 'native-base';
import * as React from 'react';
import { useContext } from 'react';
import { Linking, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import IconArrowBack from '../../assets/img/arrowBack.svg';
import Map from '../../assets/img/map.png';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import { TPost } from '../CardPosts';

type props = {
    setModalVisible: Function
    modalVisible: boolean
    post: TPost | undefined
}
export function ModalPosts({ setModalVisible, modalVisible, post }: props) {

    const { texts, language } = useContext(LanguageContext)

    const window = useWindowDimensions();

    function linkMaps() {

    }

    return (
        <>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>

                    <View>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.touchableOpacityStyle}>

                                <IconArrowBack
                                    width={25}
                                    height={25}
                                />

                            </View>

                        </TouchableOpacity>

                    </View>

                    <View style={styles.modalView}>

                        <Text style={styles.modalTextTitle}>{post?.post_titulo}</Text>

                        <Text style={styles.modalTextBody}>{post?.post_conteudo}</Text>

                        <View style={styles.map}>

                            <View style={styles.mapTextContent}>
                                <Text style={styles.TextTitleMap}>{texts.enquete.mapText.title}</Text>
                                <Text style={styles.TextSubTitleMap}>{texts.enquete.mapText.subTitle}</Text>
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => { Linking.openURL(post?.link!); }}
                            >
                                <Image source={Map} alt='Map' style={styles.mapImg} />

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>

        </>
    )
}

const styles = StyleSheet.create({

    centeredView: {
        backgroundColor: "#E1E1E1",
        paddingVertical: 20
    },
    modalView: {
        height: '100%',
        width: '100%',
        alignItems: "center"
    },
    modalTextBody: {
        marginBottom: 15,
        fontSize: 16,
        paddingHorizontal: 3,
        textAlign: 'left'
    },
    modalTextTitle: {
        marginBottom: 15,
        textAlign: "center",
        fontSize: 32
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    touchableOpacityStyle: {
        margin: 3,
    },
    map: {
        position: 'absolute',
        bottom: "5.5%",
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#363535',
        paddingVertical: 4
    },
    mapImg: {
        marginVertical: 5
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