import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { auth, db } from '../Config/Config';
import { ref, set } from 'firebase/database'; 

export default function RegistroScreen({ navigation }: any) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [usuario, setUsuario] = useState("");
  const [numero, setNumero] = useState("");

  function guardarUsuarios() {
    if (correo.trim() === '' || contrasena.trim() === '' || usuario.trim() === '' || numero.trim() === '') {
      Alert.alert("Revise los campos", "Por favor, complete todos los campos.");
      return;
    }

    set(ref(db, 'usuarios/' + usuario), { 
      username: usuario,
      email: correo,
      password: contrasena,
      numberP: numero
    });
    
    Alert.alert("Mensaje", "Información guardada");


    setCorreo("");
    setContrasena("");
    setUsuario("");
    setNumero("");
  }

  return (
    <ImageBackground source={{uri: 'https://w0.peakpx.com/wallpaper/506/235/HD-wallpaper-white-hexagon-geometric-shapes-white-aesthetic-thumbnail.jpg'}}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto}>Registro</Text>
        <Image source={{uri: 'https://salarios.trabajo.gob.ec/imagenes/registroTrabajo.png'}}
          style={styles.imagen} />

        <TextInput
          placeholder='Ingrese correo'
          onChangeText={(texto) => setCorreo(texto)}
          keyboardType='email-address'
          style={styles.input}
          value={correo}
        />

        <TextInput
          placeholder='Ingrese contraseña'
          onChangeText={(texto) => setContrasena(texto)}
          style={styles.input}
          secureTextEntry={true}
          value={contrasena}
        />

        <TextInput
          placeholder='Ingrese usuario'
          onChangeText={(texto) => setUsuario(texto)}
          style={styles.input}
          value={usuario}
        />
        
        <TextInput
          placeholder='Ingrese numero celular'
          onChangeText={(texto) => setNumero(texto)}
          keyboardType='numeric'
          style={styles.input}
          value={numero}
        />
        
        <TouchableOpacity style={styles.boton} onPress={() => { guardarUsuarios(); navigation.navigate('Welcome')}}>
          <Text style={{fontWeight: "700", textAlign: 'center'}} >Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
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
    alignItems: 'center',
  },
  texto:{
    fontSize:25,
    fontWeight: "700",
  },
  imagen:{
    width: 125,
    height: 125,
    margin: 25
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
    borderRadius: 35,
    textAlign: 'center'
  },
  boton: {
    backgroundColor: '#39af38',
    width: 100,
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 20,
  }
});
