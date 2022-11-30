import { FormControl, ISelectProps, Select as SelectNB, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { LanguageContext } from '../../Contexts/LanguageProvider';
import { TPais } from '../../Screens/Enquete';


type Props = ISelectProps & {
    errorMessage?: string | null
    isInvalid?: boolean
    paises: TPais[]
    onChange: Function
}

export const Select = ({ errorMessage = null, paises, onChange, ...rest }: Props) => {

    const invalid = !!errorMessage

    const { texts, language } = React.useContext(LanguageContext)

    return (
        <FormControl w="full" maxW="full" isRequired isInvalid={invalid}>

            <SelectNB minWidth="200" bg='white' accessibilityLabel={language == 'english' ? "Choose Country" : "Escolha seu pais"} placeholder={language == 'english' ? "Choose Country" : "Escolha seu pais"} mt="1" borderColor={invalid ? 'red.600' : 'gray.100'} borderWidth={invalid ? 2 : 0}
                onValueChange={value => {
                    onChange(value)
                }}

            >

                {
                    paises.map((pais, key) => (
                        <SelectNB.Item key={key} label={language == 'english' ? pais.nome_pais_int : pais.nome_pais} value={pais.sigla} />
                    ))
                }

            </SelectNB>

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessage}
            </FormControl.ErrorMessage>

        </FormControl>
    )
};