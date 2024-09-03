import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../globleStyle';
import * as Animatable from 'react-native-animatable';

const Screen1 = ({ navigation }) => {
  return (
    <>

      <View style={styles.container}>

         <TouchableOpacity  onPress={() => navigation.navigate('login')} >
            <Animatable.Image 
                style={{width:290,height:100,marginBottom:50}}
                source={require("../assets/kreditaid.png")}
                animation={"fadeInDown"}
                duration={2500}
                easing="ease-out-cubic"
            />  
          </TouchableOpacity>

          <Animatable.Text style={styles.logo}
            animation={"slideInUp"}
            duration={1200}
            // iterationCount={"infinite"}
            // direction="alternate"
          >
            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('login')} >
              <Text style={styles.btnText}>Get Start</Text>
            </TouchableOpacity>
            
             </Animatable.Text>

          

      </View>

    </>

  );
}


export default Screen1