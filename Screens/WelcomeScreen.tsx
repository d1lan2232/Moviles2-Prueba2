import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function WelcomeScreen({navigation} : any) {
  return (
    <ImageBackground source={{uri: 'https://i.pinimg.com/originals/fe/bc/bb/febcbb34fcead6b3ac7894baea63b1a9.jpg'}}
    style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.texto}>WelcomeScreen</Text>
      <Image source={{uri: 'https://media.istockphoto.com/id/640267784/es/foto/edificio-del-banco.jpg?s=612x612&w=0&k=20&c=1xlFQ8EoMGrrtsv4Jf_K8TCkg3gMVanWH_bBgWfEefI='}}
      style={styles.imagen} />
      <TouchableOpacity style={styles.boton1} onPress={() => navigation.navigate("Login")}>
        <Text style={{fontWeight: "700", textAlign: 'center'}}> Login </Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.boton2} onPress={() => navigation.navigate("Registro")}>
        <Text style={{fontWeight: "700", textAlign: 'center'}}> Registro </Text>
      </TouchableOpacity> 
      <Text style={{padding: 15, color: 'white'}}> Desarrollado por: Dilan Torres </Text>
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    texto:{
      fontSize:30,
      fontWeight: "700",
      color: 'white'
    },
    imagen: {
      width: 300,
      height: 300,
      margin: 25,
      borderColor: 'white',
      borderWidth: 3,
    },
    boton1: {
      backgroundColor: '#98c8e1',
      width: 100,
      padding: 10,
      margin: 10,
      borderWidth: 3,
      borderRadius: 20,
    },
    boton2: {
      backgroundColor: '#d9c2f0',
      width: 100,
      padding: 10,
      margin: 10,
      borderWidth: 3,
      borderRadius: 20,
    }
})