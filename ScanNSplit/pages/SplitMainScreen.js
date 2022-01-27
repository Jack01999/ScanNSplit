import React, { useState } from 'react';
import {
    Button,
    TextInput,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {Avatar, HStack, Badge, Center, NativeBaseProvider, VStack} from "native-base"

const SplitMainScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>This is the SplitMainScreen</Text>
            <NativeBaseProvider>
                <Center flex="1" px="3">
                    <HStack
                        mx={{
                            base: "auto",
                            md: "0",
                        }}
                        space={2}
                    >
                        <Badge // bg="red.400"
                            colorScheme="danger"
                            rounded="999px"
                            mb={10}
                            mr={-8}
                            zIndex={1}
                            variant="solid"
                            alignSelf="flex-end"
                            _text={{
                                fontSize: 12,
                            }}
                        >
                            $259.95
                        </Badge>
                        <Avatar
                            bg="green.500"
                            mr="1"
                            source={{
                                uri: "https://bit.ly/broken-link",
                            }}
                        >
                            JC
                        </Avatar>
                    </HStack>
                    <Text>---------------------</Text>
                    <VStack>
                        <Badge // bg="red.400"
                            colorScheme="danger"
                            rounded="999px"
                            mb={-2}
                            mr={-6}
                            zIndex={1}
                            variant="solid"
                            alignSelf="flex-end"
                            _text={{
                                fontSize: 12,
                            }}
                        >
                            $59.95
                        </Badge>
                        <Button
                            mx={{
                                base: "auto",
                                md: 0,
                            }}
                            p="2"
                            bg="cyan.500"
                            _text={{
                                fontSize: 14,
                            }}
                            title="Steak"
                        >
                        </Button>
                    </VStack>
                </Center>
            </NativeBaseProvider>
            <Button title="Go back to Home Screen" onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

export default SplitMainScreen;
