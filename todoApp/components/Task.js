import React, { useState } from 'react'

import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity  } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = (props) =>{
    const [Editable, setEditable]= useState(false);
    const [ToggleEdit, setToggleEdit]= useState(false);

    return (
        <View style={{padding:2}}>
                <BouncyCheckbox
                            size={31}
                            fillColor="#60BCFF"
                            unfillColor="#FFFFFF"
                            text={props.name}
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={[style.TaskContent]}
                            onPress={()=> { if(ToggleEdit) setEditable(!Editable)}}
                            /> 
                            {Editable && (<TextInput style={[style.TextInput]} 
                                            onEndEditing={()=>{
                                                setEditable(false)
                                            }} autoFocus={true} placeholderTextColor="black"></TextInput>)
                            }
        </View>
    );
}

const style = StyleSheet.create({
    TaskContent:{
        fontFamily: "Sf Pro Text",
        borderColor:'#60BCFF', 
        borderWidth:2,                                 
        borderRadius:100,
        padding:7,
        width:272,
        color:'#60BCFF',
        textAlign:'center'
    },
    TextInput:{position:'absolute', textAlign:'center', color:'black', marginLeft:'30%'}

});




export default Task;