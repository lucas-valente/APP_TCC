import { FormControl, Radio, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    errorMessage?: string | null
    isInvalid?: boolean
    onChange: Function
}

export const RadioButtonTime = ({ errorMessage, onChange }: Props) => {

    const invalid = !!errorMessage

    return (
        <View style={styles.radioButton} >
            <FormControl isRequired isInvalid={invalid} >
                <Radio.Group name="tempoBrasil" accessibilityLabel="Há quanto tempos esta no Brasil"
                    onChange={value => {
                        onChange(value)
                    }}>
                    <Radio value='1' my="1" >
                        <Text style={styles.radio}>0 a 10 anos</Text>
                    </Radio>
                    <Radio value='2' my="1" >
                        <Text style={styles.radio}>11 a 20</Text>
                    </Radio>
                    <Radio value='3' my="1" >
                        <Text style={styles.radio}>mais de 21 anos</Text>
                    </Radio>
                </Radio.Group >
                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    Informe o tempo
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