import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ButtonSVG from '../assets/img/buttonSurvey.svg';
import ButtonSVGEng from '../assets/img/ButtonSVGEng.svg';
import { Input } from '../Components/Input';
import { Select } from '../Components/Select';
import { LanguageContext } from '../Contexts/LanguageProvider';

import LottieView from 'lottie-react-native';
import { TFormDataProps, TPais } from '../@types/types';
import { AlertSucess } from '../Components/Alert';
import { RadioButtonTime } from '../Components/RadioButton';
import { RadioButtonEmpregado } from '../Components/RadioButton/RaidioButtonEmpregado';
import Paises from '../Data/paises';
import useApi from '../Hooks/useApi';

import Sending from '../assets/img/Sending.json';

export function EnqueteScreen() {

    const { control, handleSubmit, formState: { errors }, reset, getValues } = useForm<TFormDataProps>({
        defaultValues: {
            nome: '',
            pais_de_origem: '',
            tempo_no_brasil: '',
            esta_empregado: '',
            dificuldade_imigrante: '',
        }
    })

    const { texts, language } = useContext(LanguageContext)

    const [paises, setPaises] = React.useState<TPais[]>([])

    const [isLoading, setIsLoading] = React.useState(false);

    const [show, setShow] = React.useState(false);

    const api = useApi()

    function getPais() { setPaises(Paises) }

    React.useEffect(() => { getPais(), reset() }, [control])

    async function onSubmit(data: TFormDataProps) {

        setIsLoading(true)
        const dta = await api.PostSurvey(data)
        setIsLoading(false)

        if (dta == 201) {
            reset()
            setShow(true)
            setTimeout(() => (setShow(false)), 1000 * 2) // 2 segundos
        } else {
            return console.warn("Erro ao enviar formulario");
        }

    }

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#44DD9D', '#142F47']}
                style={styles.linearGradient}>

                <AlertSucess setShow={setShow} show={show} />
                {isLoading ?

                    <LottieView
                        source={Sending}
                        autoPlay={true}
                        loop={true}
                        style={{ flex: 1, position: 'absolute', top: '15%', justifyContent: 'center', alignItems: 'center', width: 350 }}
                        autoSize={true}
                        resizeMode='cover'
                    /> :
                    <>
                        <Text style={styles.header}>{texts?.enquete?.header}</Text>

                        <ScrollView style={{ width: '100%' }}>

                            <View style={styles.contentPerguntas}>
                                <Text style={styles.peguntas}>{texts.enquete.perguntas.p1} <Text style={styles.requered} >*</Text>  </Text>
                                <Controller
                                    control={control}
                                    name='nome'
                                    rules={{
                                        required: texts.enquete.mensagemDeErro.p1
                                    }}

                                    render={({ field: { onChange } }) => (
                                        <Input
                                            value={getValues().nome}
                                            errorMessage={errors.nome?.message}
                                            onChangeText={onChange} />
                                    )}
                                />

                                <Text style={styles.peguntas}>{texts.enquete.perguntas.p2} <Text style={styles.requered} >*</Text> </Text>
                                <Controller
                                    control={control}
                                    name='pais_de_origem'
                                    rules={{
                                        required: texts.enquete.mensagemDeErro.p2
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <Select paises={paises} onChange={onChange} errorMessage={errors.pais_de_origem?.message} value={getValues().pais_de_origem} />
                                    )}
                                />

                                <Text style={styles.peguntas}>{texts.enquete.perguntas.p3} <Text style={styles.requered} >*</Text> </Text>
                                <Controller
                                    control={control}
                                    name='tempo_no_brasil'
                                    rules={{
                                        required: 'Informe o tempo'
                                    }}
                                    render={({ field: { onChange } }) => (

                                        <RadioButtonTime errorMessage={errors.tempo_no_brasil?.message} onChange={onChange} value={getValues().tempo_no_brasil} />
                                    )}
                                />

                                <Text style={styles.peguntas}>{texts.enquete.perguntas.p4} <Text style={styles.requered} >*</Text> </Text>
                                <Controller
                                    control={control}
                                    name='esta_empregado'
                                    rules={{
                                        required: 'Selecione uma opção'
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <RadioButtonEmpregado errorMessage={errors.esta_empregado?.message} onChange={onChange} value={getValues().esta_empregado} />
                                    )}
                                />

                                <Text style={styles.peguntas}>{texts.enquete.perguntas.p5} <Text style={styles.requered} >*</Text> </Text>
                                <Controller
                                    control={control}
                                    name='dificuldade_imigrante'
                                    rules={{
                                        required: texts.enquete.mensagemDeErro.p5
                                    }}
                                    render={({ field: { onChange } }) => (
                                        <Input
                                            value={getValues().dificuldade_imigrante}
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
                                    onPress={handleSubmit(onSubmit)}
                                >
                                    {language == 'english' ? <ButtonSVGEng /> : <ButtonSVG />}
                                </TouchableOpacity>

                            </View>

                        </ScrollView>
                    </>
                }
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