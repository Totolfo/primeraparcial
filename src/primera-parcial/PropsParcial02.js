import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const PropsParcial02 = () => {
  const route = useRoute();
  const { nombre, estado } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {nombre ? `Hola, ${nombre}` : 'Nombre no ingresado'}
      </Text>
      <Text style={styles.titulo}>
        Estado: {estado ? 'Activo' : 'Inactivo'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Fondo claro
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#343a40', // Color de texto oscuro
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 10, // Espacio vertical entre textos
  },
});

export default PropsParcial02;
