import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Day = (props) =>{
    var date = new Date(),
	  weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
      let day = weekday[date.getDay()]
    return (
        <View>
            <Text style={[style.DayStyle]}>{day}</Text>
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


