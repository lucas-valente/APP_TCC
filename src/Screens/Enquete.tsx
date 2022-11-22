import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ButtonSVG from '../assets/img/buttonSurvey.svg';
import { LanguageContext } from '../Contexts/LanguageProvider';

type TPerguntas = {
    id: number,
    perguntas_descri: string
}


const api = axios.create({
    baseURL: 'https://restapitcc.herokuapp.com/api/v1/'
})
const username = 'lucas.valente'
const password = 'YTuNWNSN4GQ2xdp'

function useApi() {
    return ({

        GetSurvey: async () => {
            const response = await api.get('/perguntas', {
                auth: {
                    username,
                    password
                }
            })
            return response.data
        }

    })
}
export function EnqueteScreen() {

    const { texts } = useContext(LanguageContext)

    const [pergurtas, setPerguntas] = React.useState<TPerguntas[]>([])

    const api = useApi()

    React.useEffect(() => {
        async function fetch() {
            try {

                const getPergurtas = await api.GetSurvey()
                setPerguntas(getPergurtas)

            } catch (error) {
                console.warn(error)
            }
        }
        fetch()
    }, [])

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}
            >
                <Text style={styles.header}>{texts?.enquete?.header}</Text>
                {
                    pergurtas.map((pergunta, key) =>
                        <View style={styles.contentPerguntas} key={key}>
                            <Text style={styles.peguntas}>{pergunta.perguntas_descri}</Text>
                            <TextInput style={styles.input} />
                        </View>
                    )
                }
                <View style={styles.contentButton}>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.button}
                    >
                        <ButtonSVG />
                    </TouchableOpacity>

                </View>

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
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        height: 42,
        borderRadius: 5,
    },
    peguntas: {
        paddingVertical: 10,
        fontSize: 20,
        color: 'white',
        justifyContent: 'flex-start',
        width: '100%'
    },
    header: {
        color: 'white',
        fontSize: 45,
        paddingTop: 30,
        paddingBottom: 15,
        fontWeight: 'bold',
    },
    contentPerguntas: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    contentButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginTop: 15
    },
    button: {
        borderRadius: 50,
        width: '100%',
        marginHorizontal: 15,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 54,
    }

})