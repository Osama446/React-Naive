import React from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ()=>{
  return(
  <View>
      <Text style={{color:'black'}}>Home</Text>
  </View>
);
};


const Stack = createNativeStackNavigator();

const App = ()=>{
  return(
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

export default App;