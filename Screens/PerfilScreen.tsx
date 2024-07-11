import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 30, fontSize: 15, paddingBottom: 15}}>Perfil</Text>
      <Text>----------------------------------------------------------------------------------</Text>
      <Text style={{fontSize: 15, color: '#10224c', fontWeight: '800'}}>Informacion del perfil</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
    },
})