import axios from 'axios';
import LottieView from 'lottie-react-native';
import * as React from 'react';
import { useContext, useState } from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import loading from '../../assets/img/loading2.json';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import { ModalPosts } from '../ModalPosts';

export type TPost = {
    id: number
    post_titulo: string
    post_descricao: string
    post_conteudo: string
    imagem: string
    user: number
    idioma: number
}

type props = {
    item: TPost
}

export function useApi() {

    const api = axios.create({
        baseURL: 'https://restapitcc.herokuapp.com/api/v1/'
    })

    const username = 'lucas.valente'
    const password = 'YTuNWNSN4GQ2xdp'

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

    const { language } = useContext(LanguageContext)

    const [posts, setPosts] = useState<TPost[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    const [idiomaFilter, setidiomaFilter] = useState<number | null>(null);



    React.useEffect(() => {

        switch (language) {
            case 'english':
                setidiomaFilter(2)
                break;

            case 'portuguese':
                setidiomaFilter(3)
                break;
        }

        async function fetch() {
            try {

                const getPosts: TPost[] = await api.GetPosts()
                setPosts(getPosts.filter(post => (idiomaFilter == null ? post.idioma == 2 : post.idioma == idiomaFilter)))
                setIsLoading(false)

            } catch (error) {
                console.warn(error)
            }
        }
        fetch()
    }, [language])


    const [modalVisible, setModalVisible] = useState(false);

    const [post, setPost] = useState<TPost>();

    function handleModal(setpost: TPost) {
        setModalVisible(!modalVisible)
        return setPost(setpost)
    }

    function _renderItem({ item }: props) {
        return (
            <View style={styles.containerPost}>

                <ImageBackground source={{ uri: item.imagem }} style={{ width: '100%', flex: 1, borderRadius: 12 }} resizeMode="stretch">
                    <View style={styles.containerPostInterno}>

                        <Text style={styles.titlePost}>{item.post_titulo}</Text>
                        <Text style={styles.subTitlePost}>{item.post_descricao}</Text>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => handleModal(item)}
                        >
                            <Text style={styles.buttonText}>{language == 'english' ? 'KNOW MORE' : 'SAIBA MAIS'}</Text>

                        </TouchableOpacity>

                    </View>
                </ImageBackground>

                <ModalPosts setModalVisible={setModalVisible} modalVisible={modalVisible} post={post} />

            </View>
        )
    }


    return (
        <View style={styles.container}>

            {
                isLoading ?

                    <LottieView
                        source={loading}
                        autoPlay={true}
                        loop={true}
                        style={{ flex: 1, position: 'absolute', top: '20%', justifyContent: 'center', alignItems: 'center', width: 500 }}
                        autoSize={true}
                        resizeMode='cover'
                    /> :

                    posts.length == 0 ?

                        <Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', marginTop: '80%' }} >
                            Nenhum Post escontrado
                        </Text>
                        :

                        <FlatList<TPost>
                            style={{ width: '100%', paddingTop: 20 }}
                            data={posts}
                            keyExtractor={({ id: key }) => key.toString()}
                            renderItem={_renderItem}
                        />
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    containerPost: {
        position: 'relative',
        width: '96%',
        height: 345,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginBottom: 24,
        borderRadius: 10,
        overflow: 'hidden'
    },
    containerPostInterno: {
        position: 'relative',
        width: '96%',
        height: 345,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
        marginBottom: 24,
    },
    button: {
        backgroundColor: 'white',
        width: 203,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        marginTop: 15,
    },
    buttonText: {
        fontSize: 24
    },
    titlePost: {
        fontSize: 48,
        color: 'white',
        width: '100%',
        textAlign: 'center',
    },
    subTitlePost: {
        color: 'white',
        width: '100%',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '300'
    }
})
