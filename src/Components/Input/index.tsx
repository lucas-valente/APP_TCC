import { FormControl, IInputProps, Input as InputNB, WarningOutlineIcon } from 'native-base';
import React from 'react';
type Props = IInputProps & {
    errorMessage?: string | null | boolean
}

import { LanguageContext } from '../../Contexts/LanguageProvider';

export const Input = ({ errorMessage = null, isInvalid, ...rest }: Props) => {

    const { texts } = React.useContext(LanguageContext)

    const invalid = !!errorMessage || isInvalid

    return (
        <FormControl isInvalid={invalid} >
            <InputNB
                bg='white'
                w='full'
                h={42}
                fontSize='md'
                isInvalid={invalid}
                _invalid={{
                    borderColor: 'red.600',
                    borderWidth: 2
                }}

                {...rest}
            />

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {texts.enquete.mensagemDeErro.input}
            </FormControl.ErrorMessage>

        </FormControl>
    )
}