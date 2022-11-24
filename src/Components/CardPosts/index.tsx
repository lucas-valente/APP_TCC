import axios from 'axios';
import * as React from 'react';
import { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import { ModalPosts } from '../ModalPosts';

const items: TPost[] = [
    {
        "id": 1,
        "post_titulo": "Post 1",
        "post_descricao": "Descrição 1",
        "post_conteudo": "conteudo 1",
        "user": 1,
        "idioma": 1
    },
    {
        "id": 2,
        "post_titulo": "Post 2",
        "post_descricao": "Descrição 2",
        "post_conteudo": "conteudo 2",
        "user": 1,
        "idioma": 1
    },
    {
        "id": 3,
        "post_titulo": "Post 3",
        "post_descricao": "Descrição 3",
        "post_conteudo": "conteudo 3",
        "user": 1,
        "idioma": 1
    }
]

export type TPost = {
    id: number
    post_titulo: string
    post_descricao: string
    post_conteudo: string
    user: number
    idioma: number
}

type props = {
    item: TPost
}

const api = axios.create({
    baseURL: 'https://restapitcc.herokuapp.com/api/v1/'
})
const username = 'lucas.valente'
const password = 'YTuNWNSN4GQ2xdp'

export function useApi() {
    return ({

        GetPosts: async () => {
            const response = await api.get('/posts', {
                auth: {
                    username,
                    password
                }
            })
            return response.data
        }

    })
}

export function CardPosts() {

    const api = useApi()

    const [posts, setPosts] = useState<TPost[]>([]);

    React.useEffect(() => {
        async function fetch() {
            try {

                const getPosts = await api.GetPosts()
                setPosts(getPosts)

            } catch (error) {
                console.warn(error)
            }
        }
        fetch()
    }, [])

    const { texts } = useContext(LanguageContext)

    const [modalVisible, setModalVisible] = useState(false);

    const [post, setPost] = useState<TPost>();

    function handleModal(setpost: TPost) {
        setModalVisible(!modalVisible)
        return setPost(setpost)
    }

    function _renderItem({ item }: props) {
        return (
            <View style={styles.containerPost}>

                <Text style={styles.titlePost}>{item.post_titulo}</Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => handleModal(item)}
                >
                    <Text style={styles.buttonText}>SAIBA MAIS</Text>

                    <ModalPosts setModalVisible={setModalVisible} modalVisible={modalVisible} post={post} />
                </TouchableOpacity>

            </View>
        )
    }


    return (
        <View style={styles.container}>

            <FlatList<TPost>
                style={{ width: '100%', marginTop: 20 }}
                data={posts}
                keyExtractor={({ id: key }) => key.toString()}
                renderItem={_renderItem}
            />

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
        backgroundColor: '#363535',
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