import { FormControl, Radio, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    errorMessage?: string | null
    isInvalid?: boolean
    onChange: Function
}

export const RadioButtonEmpregado = ({ errorMessage, onChange }: Props) => {

    const invalid = !!errorMessage

    return (
        <View style={styles.radioButton} >
            <FormControl isInvalid={invalid}>
                <Radio.Group name="exampleGroup" accessibilityLabel="select prize"
                    onChange={value => {
                        onChange(value)
                    }}>
                    <Radio value='sim' my="1" >
                        <Text style={styles.radio}>Sim</Text>
                    </Radio>
                    <Radio value='nao' my="1" >
                        <Text style={styles.radio}>Não</Text>
                    </Radio>
                </Radio.Group>
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    You must select a Prize.
                </FormControl.ErrorMessage>
            </FormControl>
        </View>
    )
};
const styles = StyleSheet.create({
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

{/* <FormControl isInvalid={invalid} >
<Radio.Group name={name} accessibilityLabel="Há quanto tempos esta no Brasil"
    onChange={value => { setGroupValue(value || "") }}  >
    <View style={styles.radioButton} >
        <Radio value='sim' >
            <Text style={styles.radio}>Sim</Text>
        </Radio>
        <Radio value='nao' >
            <Text style={styles.radio}>Não</Text>
        </Radio>
    </View>
</Radio.Group >
<FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
    Selecione uma opção
</FormControl.ErrorMessage>
</FormControl> */}