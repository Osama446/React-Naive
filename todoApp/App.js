import React from 'react'
import { View, Text, Image, Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'

const AnotherScreen = ()=>{
  return(
  <View>
      <Text style={{color:'black'}}>Another Screen</Text>
  </View>
);
};


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
            fontWeight: '600',
            justifySelf:'center'
          },
        }}>
          <Stack.Screen name="Tasks" component={HomeScreen} />
          <Stack.Screen name="History" component={AnotherScreen} options={{title:"Tasks History"}} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;