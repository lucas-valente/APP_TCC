import { FormControl, IInputProps, Input as InputNB, WarningOutlineIcon } from 'native-base';

type Props = IInputProps & {
    errorMessage?: string | null

}

export const Input = ({ errorMessage = null, isInvalid, ...rest }: Props) => {

    const invalid = !!errorMessage || isInvalid

    return (
        <FormControl mb={4} isInvalid={invalid} >
            <InputNB
                bg='white'
                w='full'
                h={42}
                fontSize='md'
                isInvalid={invalid}
                _invalid={{
                    borderColor: 'red.500',
                    borderWidth: 2
                }}

                {...rest}
            />

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessage}
            </FormControl.ErrorMessage>

        </FormControl>
    )
}