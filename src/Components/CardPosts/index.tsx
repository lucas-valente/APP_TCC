import LottieView from 'lottie-react-native';
import * as React from 'react';
import { useContext, useState } from 'react';
import { FlatList, ImageBackground, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TPost } from '../../@types/types';

import loading from '../../assets/img/loading2.json';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import useApi from '../../Hooks/useApi';
import { ModalPosts } from '../ModalPosts';

export function CardPosts() {

    const api = useApi()

    const { language } = useContext(LanguageContext)

    const [posts, setPosts] = useState<TPost[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    const [idiomaFilter, setidiomaFilter] = useState<number>(1);

    const [refreshing, setRefreshing] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);

    const [post, setPost] = useState<TPost>();

    React.useEffect(() => { fetchOut() }, [language, idiomaFilter])

    async function fetchOut() {

        switch (language) {

            case 'portuguese':
                setidiomaFilter(1)
                break;

            case 'english':
                setidiomaFilter(2)
                break;
        }

        try {

            const getPosts: TPost[] = await api.GetPosts()

            setPosts(getPosts.filter(post => (post.idioma == idiomaFilter)))
            setIsLoading(false)
            setRefreshing(false)

        } catch (error) {
            console.warn(error)
        }
    }

    async function fetchIn() {

        switch (idiomaFilter) {

            case 1:
                setidiomaFilter(1)
                break;

            case 2:
                setidiomaFilter(2)
                break;
        }

        try {

            const getPosts: TPost[] = await api.GetPosts()
            // setPosts(getPosts.filter(post => (idiomaFilter == null ? post.idioma == 1 : post.idioma == idiomaFilter)))
            setPosts(getPosts.filter(post => (post.idioma == idiomaFilter)))
            setIsLoading(false)
            setRefreshing(false)

        } catch (error) {
            console.warn(error)
        }
    }

    function handleModal(setpost: TPost) {
        setModalVisible(!modalVisible)
        return setPost(setpost)
    }

    function _renderItem({ item }: { item: TPost }) {
        return (
            <View style={styles.containerPost}>

                <ImageBackground source={{ uri: item.imagem }} style={{ width: '100%', flex: 1, borderRadius: 12 }} resizeMode="stretch" blurRadius={5}>
                    <View style={styles.containerPostInterno}>

                        <Text style={styles.titlePost}>{item.post_titulo}</Text>
                        <Text style={styles.subTitlePost}>{item.post_descricao}</Text>

                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={styles.button}
                            onPress={() => handleModal(item)}
                        >
                            <Text style={styles.buttonText}>{language == 'english' ? 'MORE' : 'SAIBA MAIS'}</Text>

                        </TouchableOpacity>

                    </View>
                </ImageBackground>

                <ModalPosts setModalVisible={setModalVisible} modalVisible={modalVisible} post={post} />

            </View>
        )
    }

    const onRefresh = () => {
        setRefreshing(true);
        setIsLoading(true)
        fetchIn();
    };

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
                            {language == 'english' ? 'No posts found' : 'Nenhum Post escontrado'}
                        </Text>
                        :

                        <FlatList<TPost>
                            style={{ width: '100%', paddingTop: 20 }}
                            data={posts}
                            keyExtractor={({ id: key }) => key.toString()}
                            renderItem={_renderItem}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
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
