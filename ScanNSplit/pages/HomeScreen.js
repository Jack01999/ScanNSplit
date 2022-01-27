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
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import { launchCamera, launchImageLibrary} from "react-native-image-picker";

const HomeScreen = ({ navigation })  => {
    const [filePath, setFilePath] = useState({});

    const captureImage = () => {
        let options = {
            mediaType: 'photo',
            maxHeight: 600,
            maxWidth: 800,
            cameraType: 'back',
            saveToPhoto: true
        }
        launchCamera(options, (response) => {
            console.log(response.assets[0].uri);
            // setFilePath(response.uri);
            setFilePath(response.assets[0].uri);
        });
    };

    const chooseFile = () => {
        let options = {
          mediaType: 'photo',
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        launchImageLibrary(options, (response) => {
          console.log('Response = ', response);
          setFilePath(response.assets[0].uri);
        });
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text style={{ fontSize: 50, color: 'green' }}>ScanNSplit</Text>
            <Text style={styles.titleText}>
                Example of Image Picker in React Native
            </Text>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: filePath }}
                    style={styles.imageBox}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.container}>
                <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={() => captureImage()}>
                <Text style={styles.textStyle}>Launch Camera for Image</Text>
                </TouchableOpacity>
                <TouchableOpacity
                activeOpacity={0.5}
                style={styles.buttonStyle}
                onPress={() => chooseFile()}>
                <Text style={styles.textStyle}>Choose Image</Text>
                </TouchableOpacity>
            </View>
            <Button title="Go to Split Main Screen" onPress={() => navigation.navigate('Main')}></Button>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingVertical: 20,
    },
    textStyle: {
      padding: 10,
      color: 'black',
      textAlign: 'center',
    },
    buttonStyle: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 5,
      marginVertical: 10,
      width: 250,
    },
    imageStyle: {
      width: 200,
      height: 200,
      margin: 5,
    },
    imageContainer: {
        marginVertical: 20,
        borderWidth: 5,
        borderColor: '#ff5555'
    },
    imageBox: {
        width: 256,
        height: 256
    }
  });