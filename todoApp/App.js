import React from 'react'
import { View, Text, Image, Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import AnotherScreen from './screens/AnotherScreen'


const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      {
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#60BCFF',
            
          },
          headerTintColor: '#fff',

          headerTitleAlign:'center',
          headerTitleStyle: {
            fontFamily:'Sf Pro Display',
            fontWeight: '700',
          },
        }}>
          <Stack.Screen name="Tasks" component={HomeScreen} options={{title:'Todo List'}} />
          <Stack.Screen name="History" component={AnotherScreen} options={{title:"Tasks History"}} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;