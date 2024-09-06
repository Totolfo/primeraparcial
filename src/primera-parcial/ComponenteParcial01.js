import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComponenteParcial01 = () => {
  const [nombre, setNombre] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Examen Primera Parcial</Text>
      
      {/* Card con logo */}
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Reemplaza con tu logo si lo tienes
          style={styles.logo}
        />
      </View>

      {/* Input para ingresar nombre */}
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre"
        placeholderTextColor="#888" // Color gris para el texto del placeholder
        value={nombre}
        onChangeText={(text) => setNombre(text)}
      />

      {/* Botones para navegar a los otros componentes */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('PropsParcial02', { nombre, estado: false })}
      >
        <Text style={styles.buttonText}>PropsParcial02</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AxiosParcial03')}
      >
        <Text style={styles.buttonText}>AxiosParcial03</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('AsyncStorageParcial04')}
      >
        <Text style={styles.buttonText}>AsyncStorageParcial04</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Fondo claro y moderno
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    color: '#343a40', // Color de texto oscuro
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30, // Espacio debajo del título
  },
  card: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5, // Sombra para Android
    marginBottom: 30, // Espacio debajo del card
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain', // Asegúrate de que la imagen se ajuste dentro del card
  },
  input: {
    width: '80%',
    height: 45,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    marginBottom: 25, // Espacio debajo del input
    color: '#000', // Color del texto ingresado
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20, // Espacio entre botones
    elevation: 3, // Sombra para Android
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  }
});

export default ComponenteParcial01;
