import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const AxiosParcial03 = () => {
  const [correos, setCorreos] = useState([]);

  useEffect(() => {
    // Petición GET a la API
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => setCorreos(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={correos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.texto}>{item.email}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Fondo claro
  },
  texto: {
    fontSize: 16,
    marginVertical: 5,
    color: '#000', // Color del texto negro
  },
});

export default AxiosParcial03;
