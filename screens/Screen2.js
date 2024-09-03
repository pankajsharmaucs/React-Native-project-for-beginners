import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../globleStyle';
import * as Animatable from 'react-native-animatable';

const Screen2 = ({ navigation }) => {
  return (
    <>


      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjkwNC1udW5ueS0wMTJfMy5qcGc.jpg' }}
          style={styles.imageBackground}
        >

          <Text style={styles.logo}>Choose Your Target</Text>

          <Animatable.View
            animation={"slideInUp"}
            duration={1000}
          >
            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('showPlan', { data: 1 })} >
              <Text
                style={styles.btnText}>Download report</Text>
            </TouchableOpacity>

          </Animatable.View>

          {/* <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('bodyDataForm',{ data: 2 }) } >
              <Text style={styles.btnText}>Option2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('bodyDataForm',{ data: 3 }) } >
              <Text style={styles.btnText}>Option3</Text>
            </TouchableOpacity> */}

        </ImageBackground>
      </View>

    </>

  );
}



export default Screen2