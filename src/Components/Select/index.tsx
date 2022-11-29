import { FormControl, ISelectProps, Select as SelectNB, WarningOutlineIcon } from 'native-base';
import { TPais } from '../../Screens/Enquete';

type Props = ISelectProps & {
    errorMessage?: string | null
    isInvalid?: boolean
    paises: TPais[]
    onChange: Function
}

export const Select = ({ errorMessage = null, paises, onChange, ...rest }: Props) => {

    const invalid = !!errorMessage

    return (
        <FormControl w="full" maxW="full" isRequired isInvalid={invalid}>

            <SelectNB minWidth="200" bg='white' accessibilityLabel="Choose Country" placeholder="Escolha seu pais" mt="1"
                onValueChange={value => {
                    onChange(value)
                }}
            >

                {
                    paises.map((pais, key) => (
                        <SelectNB.Item key={key} label={pais.nome_pais} value={pais.sigla} />
                    ))
                }

            </SelectNB>

            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                {errorMessage}
            </FormControl.ErrorMessage>

        </FormControl>
    )
};