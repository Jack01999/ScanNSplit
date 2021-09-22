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

const HomeScreen = ({ navigation })  => {
    const [count, setCount] = useState(0);
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text style={{ fontSize: 50, color: 'green' }}>ScanNSplit</Text>
            <Text>Hello, Bella x {count}!</Text>
            <Button title="Go to Split Main Screen" onPress={() => navigation.navigate('Main')}></Button>
            <Button title="Camera" onPress={() => navigation.navigate('Camera')}></Button>
        </View>
    )
}

export default HomeScreen;
