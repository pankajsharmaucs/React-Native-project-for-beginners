
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        marginBottom: "30px",
        color: "#353535",
        fontSize: 25,
        fontWeight: "800",
        fontFamily: "sans-serif",
        textAlign: "center",
        marginBottom: 20,
    },

    startBtn: {
        width: 200,
        backgroundImage: 'linear-gradient(to right, rgb(42, 127, 236),rgb(103, 42, 236))',
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 5,
        padding:10,
        marginBottom: 20,
        justifyContent:"center",
    },

    submitBtn2: {
        width: 200,
        height: 40,
        backgroundImage: 'linear-gradient(to right, #0ead58,#0ec2b3)',
        alignItems: 'center',
        justifyContent:"center",
        borderRadius: 5,
        marginBottom: 20,

    },

    btnText: {
        color: "white",
        fontSize: 17,
        fontWeight: 600,
    },

    input1: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#f9f9f9',
        marginBottom: 10,
    },
    

    
});