import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponenteParcial01 from './src/primera-parcial/ComponenteParcial01';
import PropsParcial02 from './src/primera-parcial/PropsParcial02';
import AxiosParcial03 from './src/primera-parcial/AxiosParcial03';
import AsyncStorageParcial04 from './src/primera-parcial/AsyncStorageParcial04';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial01">
        {/* Pantalla 1: Cambiamos el título de la barra de navegación */}
        <Stack.Screen 
          name="ComponenteParcial01" 
          component={ComponenteParcial01}
          options={{ title: 'Examen Primera Parcial' }} // Cambia el título aquí
        />
        {/* Pantalla 2 */}
        <Stack.Screen 
          name="PropsParcial02" 
          component={PropsParcial02}
          options={{ title: 'Props Parcial 02' }} // Puedes cambiar el título aquí también
        />
        {/* Pantalla 3 */}
        <Stack.Screen 
          name="AxiosParcial03" 
          component={AxiosParcial03}
          options={{ title: 'Axios Parcial 03' }} 
        />
        {/* Pantalla 4 */}
        <Stack.Screen 
          name="AsyncStorageParcial04" 
          component={AsyncStorageParcial04}
          options={{ title: 'Async Storage Parcial 04' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
