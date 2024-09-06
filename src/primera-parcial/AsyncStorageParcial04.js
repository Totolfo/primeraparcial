import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [materia, setMateria] = useState('');
  const [calificaciones, setCalificaciones] = useState('');
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const guardarDatos = async () => {
    try {
      const nuevoDato = { codigo, materia, calificaciones };
      const jsonDatos = JSON.stringify([...datos, nuevoDato]);
      await AsyncStorage.setItem('datosParcial', jsonDatos);
      setDatos(prev => [...prev, nuevoDato]);
      setCodigo('');
      setMateria('');
      setCalificaciones('');
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerDatos = async () => {
    try {
      const jsonDatos = await AsyncStorage.getItem('datosParcial');
      if (jsonDatos !== null) {
        setDatos(JSON.parse(jsonDatos));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
        placeholderTextColor="#6c757d" // Color del texto del placeholder
      />
      <TextInput
        placeholder="Materia"
        value={materia}
        onChangeText={setMateria}
        style={styles.input}
        placeholderTextColor="#6c757d" // Color del texto del placeholder
      />
      <TextInput
        placeholder="Calificaciones"
        value={calificaciones}
        onChangeText={setCalificaciones}
        style={styles.input}
        placeholderTextColor="#6c757d" // Color del texto del placeholder
      />
      <Button title="Guardar" onPress={guardarDatos} />

      <FlatList
        data={datos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {item.codigo} - {item.materia} - {item.calificaciones}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa', // Fondo claro
  },
  input: {
    height: 40,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20, // Espacio debajo del input
    color: '#000', // Color del texto negro
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    color: '#000', // Color del texto negro
  },
});

export default AsyncStorageParcial04;
