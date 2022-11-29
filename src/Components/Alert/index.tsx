import { Alert, Box, CloseIcon, Collapse, HStack, IconButton, Text, VStack } from 'native-base';
import React from 'react';

type props = {
    show: boolean
    setShow: Function
}

export function AlertSucess({ setShow, show }: props) {
    return <Box w="100%" alignItems="center">

        <Collapse isOpen={show}>

            <Alert maxW="400" status="success">

                <VStack space={1} flexShrink={1} w="100%">

                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">

                        <HStack flexShrink={1} space={2} alignItems="center">

                            <Alert.Icon />

                            <Text fontSize="md" fontWeight="medium" _dark={{
                                color: "coolGray.800"
                            }}>
                                Enquete enviada com sucesso!
                            </Text>

                        </HStack>

                        <IconButton variant="unstyled" _focus={{
                            borderWidth: 0
                        }} icon={<CloseIcon size="3" />} _icon={{
                            color: "coolGray.600"
                        }} onPress={() => setShow(false)} />

                    </HStack>

                </VStack>

            </Alert>

        </Collapse>

    </Box>;
}