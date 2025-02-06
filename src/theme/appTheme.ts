import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        backgroundColor: '#ADD8E6',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 8,
    },
    text1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,   
        fontWeight: 'bold',
        marginTop:20
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        width: 100,
        textAlign: 'center',
        marginTop: 20
    },
    input: {
        backgroundColor:'#DCDCDC',
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 5,
    },
    conteiner: {
        backgroundColor: '#ADD8E6',    
        flex: 1,
        padding: 24,
    },
    
});