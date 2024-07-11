import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { ref, onValue } from "firebase/database";
import { db } from '../Config/Config';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../Components/Card';

export default function HistorialScreen() {

  const [lista, setlista] = useState([])

  function leer() {
    const starCountRef = ref(db, 'operaciones/' );
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        //console.log(data);

        //transformación
        const listaTemporal : any = Object.keys(data).map( (id)=> ({
            id, ...data[id]
        })   )
        //console.log(listaTemporal);
        setlista(listaTemporal)            
    });
}


useEffect(() => {
    leer()
    
}, [])


  return (
    <View style={styles.container}>
      <Text style={{paddingTop: 30, fontSize: 15, paddingBottom: 15}}>Historial</Text>
      <Text>----------------------------------------------------------------------------------</Text>
      <Text style={{fontSize: 28, color: '#10224c', fontWeight: '800'}}>Mi historial</Text>
      <FlatList
                data={lista}
                renderItem={({ item }) =>
                    <Card data={item} />
                }
            />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
    },

})