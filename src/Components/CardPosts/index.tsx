import * as React from 'react';
import { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import { ModalPosts } from '../ModalPosts';

const items = [
    {
        "id": 1,
        "post_titulo": "Post 1",
        "post_descricao": "Descrição 1",
        "post_conteudo": "svbverbeb",
        "user": 1,
        "idioma": 1
    },
    {
        "id": 2,
        "post_titulo": "Post 2",
        "post_descricao": "Descrição 2",
        "post_conteudo": "svbverbeb",
        "user": 1,
        "idioma": 1
    }
]

export function CardPosts() {

    const { texts } = useContext(LanguageContext)

    const [modalVisible, setModalVisible] = useState(false);

    function _renderItem({ item }) {
        return (
            <View style={styles.containerPost}>
                <Text style={styles.titlePost}>{item.post_titulo}</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>SAIBA MAIS</Text>
                </TouchableOpacity>

                <ModalPosts setModalVisible={setModalVisible} modalVisible={modalVisible} title={item.post_titulo} />
            </View>
        )
    }

    return (
        <View style={styles.container}>


            <Text>{texts.home.header}</Text>

            <FlatList
                style={{ width: '100%' }}
                data={items}
                keyExtractor={({ id: key }) => key.toString()}
                renderItem={_renderItem}
            />

            {/* <View >

                <Text style={styles.titlePost}>Para onde ir ?</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={styles.buttonText}>SAIBA MAIS</Text>
                </TouchableOpacity>

                <ModalPosts setModalVisible={setModalVisible} modalVisible={modalVisible} title='modal 1' />

            </View> */}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    containerPost: {
        backgroundColor: 'red',
        width: '96%',
        height: 345,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        borderRadius: 10,
        marginBottom: 24
    },
    button: {
        backgroundColor: 'white',
        width: 203,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 96,
    },
    buttonText: {
        fontSize: 24
    },
    titlePost: {
        fontSize: 48,
        color: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // marginTop: 22
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