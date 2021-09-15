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

const SplitMainScreen = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>This is the SplitMainScreen</Text>
            <Button title="Go back to Home Screen" onPress={() => navigation.navigate('Home')}></Button>
        </View>
    )
}

export default SplitMainScreen;
