import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { styles } from '../globleStyle';
import * as Animatable from 'react-native-animatable';

const Screen3 = ({ navigation, route }) => {
    const receivedData = route.params?.data;
    console.log(JSON.stringify(receivedData));
    return (
        <>

            <View style={styles.container}>
                <ImageBackground
                    source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwNC1udW5ueS0wMTJfMy5qcGc.jpg' }}
                    style={styles.imageBackground}
                >

                    <Animatable.View
                        animation={"slideInUp"}
                        duration={3000}
                    >

                        <Text style={{ fontSize: 20 }}>Data 1</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Enter Data 1"
                            placeholderTextColor="#999"
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCompleteType="off"
                            autoCorrect={false}
                        />

                        <Text style={{ fontSize: 20 }}>Data 2</Text>
                        <TextInput
                            style={styles.input1}
                            placeholder="Enter Data 2"
                            placeholderTextColor="#999"
                            keyboardType="default"
                            autoCapitalize="none"
                            autoCompleteType="off"
                            autoCorrect={false}
                        />
                    </Animatable.View>

                    <TouchableOpacity style={styles.submitBtn}
                        onPress={() => navigation.navigate('showPlan', { data: { weight: 83, height: 170 } })} >
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </View>

        </>

    );
}

export default Screen3