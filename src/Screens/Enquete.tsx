import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonSVG from '../assets/img/buttonSurvey.svg';
import { Input } from '../Components/Input';
import { Select } from '../Components/Select';
import { LanguageContext } from '../Contexts/LanguageProvider';

import { FormControl } from 'native-base';
import { AlertSucess } from '../Components/Alert';
import { RadioButtonTime } from '../Components/RadioButton';
import { RadioButtonEmpregado } from '../Components/RadioButton/RaidioButtonEmpregado';
import Paises from '../Data/paises';

type TPerguntas = {
    id: number,
    perguntas_descri: string
}

type formDataProps = {
    nome: string
    pais_de_origem: string,
    tempo_no_brasil: string,
    esta_empregado: string,
    dificuldade_imigrante: string,
}

export type TPais = {
    gentilico: string,
    nome_pais: string,
    nome_pais_int: string,
    sigla: string
}

const api = axios.create({
    baseURL: 'https://restapitcc.herokuapp.com/api/v1/'
})

export function useApi() {

    const username = 'lucas.valente'
    const password = 'YTuNWNSN4GQ2xdp'

    return ({

        PostSurvey: async (data: formDataProps) => {
            const response = await api.post('/respostas', data, {
                auth: {
                    username,
                    password
                }
            })
            return response.status
        }

    })
}

export function EnqueteScreen() {

    const { control, handleSubmit, formState: { errors } } = useForm<formDataProps>()

    const { texts } = useContext(LanguageContext)

    const [perguntas, setPerguntas] = React.useState<TPerguntas[]>([])

    const [paises, setPaises] = React.useState<TPais[]>([])

    const [isLoading, setIsLoading] = React.useState(true);

    const [show, setShow] = React.useState(false);

    const api = useApi()

    function getPais() {
        setPaises(Paises)
    }

    React.useEffect(() => {
        getPais()
    }, [])


    async function handdleSubmit(data: formDataProps) {
        const dta = await api.PostSurvey(data)

        if (dta == 201) {
            return setShow(true)
        } else {
            return console.warn("Erro ao envir formulario");
        }

    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}>

                <AlertSucess setShow={setShow} show={show} />

                <Text style={styles.header}>{texts?.enquete?.header}</Text>

                <ScrollView style={{ width: '100%' }}>
                    <FormControl>
                        <View style={styles.contentPerguntas}>
                            <Text style={styles.peguntas}>Qual o seu nome? <Text style={styles.requered} >*</Text>  </Text>
                            <Controller
                                control={control}
                                name='nome'
                                rules={{
                                    required: 'Informe o nome'
                                }}
                                defaultValue=""
                                render={({ field: { onChange } }) => (
                                    <Input
                                        errorMessage={errors.nome?.message}
                                        onChangeText={onChange} />
                                )}
                            />

                            <Text style={styles.peguntas}>Qual o seu país de origem? <Text style={styles.requered} >*</Text> </Text>
                            <Controller
                                control={control}
                                name='pais_de_origem'
                                rules={{
                                    required: 'Informe o pais'
                                }}
                                defaultValue=""
                                render={({ field: { onChange } }) => (
                                    <Select paises={paises} onChange={onChange} errorMessage={errors.pais_de_origem?.message} />
                                )}
                            />

                            <Text style={styles.peguntas}>Há quanto tempo está no Brasil? <Text style={styles.requered} >*</Text> </Text>
                            <Controller
                                control={control}
                                name='tempo_no_brasil'
                                rules={{
                                    required: 'Informe o tempo'
                                }}
                                render={({ field: { onChange } }) => (

                                    <RadioButtonTime errorMessage={errors.tempo_no_brasil?.message} onChange={onChange} />
                                )}
                            />

                            <Text style={styles.peguntas}>Atualmente você está empregado? <Text style={styles.requered} >*</Text> </Text>
                            <Controller
                                control={control}
                                name='esta_empregado'
                                rules={{
                                    required: 'Selecione uma opção'
                                }}
                                render={({ field: { onChange } }) => (
                                    <RadioButtonEmpregado errorMessage={errors.esta_empregado?.message} onChange={onChange} />
                                )}
                            />

                            <Text style={styles.peguntas}>Qual é a maior dificuldade enfrentada como imigrante? <Text style={styles.requered} >*</Text> </Text>
                            <Controller
                                control={control}
                                name='dificuldade_imigrante'
                                rules={{
                                    required: 'Informe a descrição'
                                }}
                                defaultValue=""
                                render={({ field: { onChange } }) => (
                                    <Input
                                        h={100}
                                        errorMessage={errors.dificuldade_imigrante?.message}
                                        onChangeText={onChange} />
                                )}
                            />

                        </View>

                        <View style={styles.contentButton}>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={styles.button}
                                onPress={handleSubmit(handdleSubmit)}
                            >
                                <ButtonSVG />
                            </TouchableOpacity>

                        </View>
                    </FormControl>
                </ScrollView>

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
    },
    requered: {
        color: 'red'
    },
    radioButton: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-around',
        marginVertical: 6
    },
    radio: {
        color: 'white'
    }

})