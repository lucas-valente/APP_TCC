import * as React from 'react';
import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import { TPost } from '../CardPosts';

type props = {
    setModalVisible: Function
    modalVisible: boolean
    post: TPost | undefined
}
export function ModalPosts({ setModalVisible, modalVisible, post }: props) {

    const { texts } = useContext(LanguageContext)

    return (
        <>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <Text style={styles.modalText}>{post?.post_titulo}</Text>

                        <Text style={styles.modalText}>{post?.post_conteudo}</Text>

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </>
    )
}

const styles = StyleSheet.create({

    button: {
        backgroundColor: 'white',
        width: 203,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 96,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalView: {
        flex: 1,
        width: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
})