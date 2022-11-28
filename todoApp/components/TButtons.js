import React from 'react'
import { View, Text, Pressable, Image, Alert} from 'react-native'

const TButtons = (props)=>{
    return (
        <Pressable onPress={props.onPress} style={{marginLeft:-55, marginTop:25, justifyContent:'center', alignItems:'center'}}>
          <Image source={require('../images/circle.png')} />
          <Text style={{fontSize:32, position:'absolute'}}>{props.img}</Text>
        </Pressable>
    );
}

export default TButtons