import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/Config'

export default function LoginScreen({ navigation }: any) {

  const [correo, setCorreo] = useState('')
  const [contrasenia, setContrasenia] = useState('')

  function login() {
    if (correo.trim() === '' || contrasenia.trim() === '') {
      Alert.alert("Revise los campos", "Por favor, complete ambos campos.");
      return;
    }

    signInWithEmailAndPassword(auth, correo, contrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Tab');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);

        let titulo = "";
        let mensaje = "";

        if (errorCode === "auth/wrong-password") {
          titulo = "Error de contraseña";
          mensaje = "Contraseña incorrecta, revisar credenciales";
        } else if (errorCode === "auth/user-not-found") {
          titulo = "Error de usuario";
          mensaje = "Usuario no encontrado, revisar el correo electrónico";
        } else {
          titulo = "Error de acceso";
          mensaje = "Revisar credenciales de correo y contraseña";
        }

        Alert.alert(titulo, mensaje);
      });

    
    setCorreo("");
    setContrasenia("");
  }

  return (
    <ImageBackground source={{ uri: 'https://w0.peakpx.com/wallpaper/506/235/HD-wallpaper-white-hexagon-geometric-shapes-white-aesthetic-thumbnail.jpg' }}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto}>LoginScreen</Text>
        <Image source={{ uri: 'https://img.freepik.com/vector-gratis/ilustracion-icono-candado_53876-5633.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=sph' }}
          style={styles.imagen} />
        <TextInput
          placeholder='Ingrese su correo'
          style={styles.input}
          onChangeText={(texto) => setCorreo(texto)}
        />
        <TextInput
          placeholder='Ingrese su contraseña'
          style={styles.input}
          onChangeText={(texto) => setContrasenia(texto)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.boton} onPress={() => login()}>
          <Text style={{ fontWeight: "700", textAlign: 'center' }} >Ingresar</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 25,
    fontWeight: "700",
  },
  imagen: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 455,
    margin: 15
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    margin: 15,
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
})
