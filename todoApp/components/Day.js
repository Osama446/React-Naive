import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Day = (props) =>{
    return (
        <View>
            <Text style={[style.DayStyle]}>{props.name}</Text>
        </View>
    );
}

const style = StyleSheet.create(
    {
        DayStyle:{
            fontFamily: 'SF Pro',
            fontStyle: 'normal',
            color:'white',
            backgroundColor:'#60BCFF',
            width:152,
            height:31,
            borderRadius:100,
            textAlign:'center',
            padding:5,
            LineHeight: 11.5,
            fontWeight:'600',
            fontSize:16,
            letterSpacing:0.1
        },
    }
)


export default Day;


