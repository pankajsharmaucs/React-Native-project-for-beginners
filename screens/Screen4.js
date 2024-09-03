import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Linking, ScrollView } from 'react-native';
import { styles } from '../globleStyle';
import Accordion1 from '../components/Accordion1';

import * as Animatable from 'react-native-animatable';

const Screen4 = ({ navigation, route }) => {
    const receivedData = route.params?.data;

    const [authUser, setAuthUser] = useState(false);

    const meal1 = " 1 Glass Warn Water, 1 Apple or Banana, 1 Scoop Protien Shake";
    const meal2 = " 1 Scoop Protien Shake, 2 bread/roti with peanut butter";
    const meal3 = " 1 Scoop Protien Shake, 2 bread/roti with peanut butter";
    const meal4 = " 1 Scoop Protien Shake, 2 bread/roti with peanut butter";
    const meal5 = " 1 Scoop Protien Shake, 2 bread/roti with peanut butter";

    const openWhatsApp = () => {

        const phoneNumber = '918800637982'; // Change this to the desired phone number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello%2C%20World!`;
        // Attempt to open WhatsApp
        Linking.canOpenURL(whatsappUrl).then(supported => {
            if (supported) {
                return Linking.openURL(whatsappUrl);
            } else {
                console.log("WhatsApp is not installed on your device.");
            }
        }).catch(err => console.error('An error occurred', err));
    }

    return (
        <>

            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground
                        source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwNC1udW5ueS0wMTJfMy5qcGc.jpg' }}
                        style={styles.imageBackground}
                    >
                        <View>
                            <Text style={styles.logo}>
                                Full Report
                            </Text>
                        </View>

                        <Animatable.View
                            animation={"slideInUp"}
                            duration={1200}
                        >
                            <Accordion1 title="report 1" content={meal1} />
                            {
                                authUser
                                    ?
                                    <>
                                        <Accordion1 title="Meal 2" content={meal2} />
                                        <Accordion1 title="Meal 3" content={meal3} />
                                        <Accordion1 title="Meal 4" content={meal4} />
                                        <Accordion1 title="Meal 4" content={meal5} />
                                    </>
                                    :
                                    <>
                                        <Accordion1 title="Report 2" content={"Locked"} />
                                        <Accordion1 title="Report 3" content={"Locked"} />
                                        <Accordion1 title="Report 4" content={"Locked"} />
                                        <Accordion1 title="Report 4" content={"Locked"} />

                                    </>

                            }

                        </Animatable.View>

                        {
                            !authUser
                            &&
                            <TouchableOpacity style={styles.submitBtn2}
                                onPress={openWhatsApp} >
                                <Text style={styles.btnText}>Get Full Diet in Free</Text>
                            </TouchableOpacity>
                        }



                    </ImageBackground>
                </View>
            </ScrollView>
        </>

    );
}


export default Screen4