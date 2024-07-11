import { Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ref, set } from 'firebase/database';
import { db } from '../Config/Config';

export default function OperacionesScreen() {

  const [id, setid] = useState("");
  const [monto, setmonto] = useState("");
  const [tipo, settipo] = useState("");
  const [comentario, setcomentario] = useState("");


  function guardarOperaciones() {

    const montoNum = parseFloat(monto);


    if (montoNum > 500) {
  
      Alert.alert(
        "Confirmación",
        `El monto ingresado es mayor a $500. ¿Desea continuar con la transacción?`,
        [
          {
            text: "Cancelar",
            style: "cancel"
          },
          {
            text: "Continuar",
            onPress: () => {
              set(ref(db, 'operaciones/' + id), { 
                id: id,
                monto: monto,
                tipo: tipo,
                comentario: comentario
              });

              Alert.alert("Mensaje", "Operación ejecutada");

              setid("");
              setmonto("");
              settipo("");
              setcomentario("");
            }
          }
        ]
      );
    } else {
      
      set(ref(db, 'operaciones/' + id), { 
        id: id,
        monto: monto,
        tipo: tipo,
        comentario: comentario
      });


      Alert.alert("Mensaje", "Operación ejecutada");

      setid("");
      setmonto("");
      settipo("");
      setcomentario("");
    }
  }

  return (
    <ImageBackground source={{uri: 'https://w0.peakpx.com/wallpaper/506/235/HD-wallpaper-white-hexagon-geometric-shapes-white-aesthetic-thumbnail.jpg'}}
    style={styles.background}>
    <View style={styles.container}>
      <Text style={styles.texto}>Operaciones</Text>
      <TextInput
      style={styles.input}
      placeholder='ID operación'
      onChangeText={(texto) => setid(texto)}
      keyboardType='numeric'
      />
      <TextInput
      style={styles.input}
      placeholder='Monto'
      keyboardType='numeric'
      onChangeText={(texto) => setmonto(texto)}
      />
      <TextInput
      style={styles.input}
      placeholder='Tipo de operación'
      onChangeText={(texto) => settipo(texto)}
      />
      <TextInput
      style={styles.inputC}
      placeholder='Comentario'
      onChangeText={(texto) => setcomentario(texto)}
      />

      <TouchableOpacity style={styles.btn} onPress={() => guardarOperaciones()}>
        <Text style={{fontWeight: "700", textAlign: 'center'}}>Ejecutar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize:30,
    fontWeight: "700",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
    borderRadius: 35,
    textAlign: 'center',
    backgroundColor: '#e0e7f0'
  },
  inputC:{
    width: 200,
    height: 100,
    padding: 10,
    borderColor: 'black',
    borderWidth: 3,
    margin: 10,
    borderRadius: 35,
    textAlign: 'center',
    backgroundColor: '#e0e7f0'
  },
  btn:{
    backgroundColor: '#86ef8c',
    width: 100,
    padding: 10,
    margin: 10,
    borderWidth: 3,
    borderRadius: 20,
  }
})
