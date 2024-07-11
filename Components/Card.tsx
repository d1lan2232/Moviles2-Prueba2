import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Card(props: any) {
    console.log(props);

    function mensaje(usuarios: any) {
        Alert.alert("INFORMACIÓN", usuarios.id)
    }

    return (

        <TouchableOpacity onPress={() => mensaje(props.data)}>
            <View style={styles.container}>
                <Text style={styles.txt} > ID: {props.data.id}</Text>
                <Text style={styles.txt}> Monto: {props.data.monto}</Text>
                <Text style={styles.txt}>Tipo: {props.data.tipo}</Text>
                <Text style={styles.txt}>Comentario: {props.data.comentario}</Text>
            </View>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#83a0ce',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 20
    },
    txt: {
        fontSize: 20
    }
})