import React, { useState } from 'react'

import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity  } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = ( props ) =>{
    
    const [Text, setText]= useState(props.name);
    const [TaskText, setTaskText]= useState('');
    
    const [Visible, setVisible]= useState(false);
    
    return (
        <View style={{padding:2}}>
                <BouncyCheckbox
                            size={31}
                            fillColor="#60BCFF"
                            unfillColor="#FFFFFF"
                            text={Text}
                            iconStyle={{  }}
                            innerIconStyle={{ borderWidth: 2 }}
                            textStyle={[style.TaskContent]}
                            onPress={()=>{ 
                                 props?.listRemover(Text);
                                 props?.toggleRemove(false)
                                
                                if(props?.listChanger()){
                                    setVisible(true)
                                }
                                          }}

                            /> 
                            {Visible && (<TextInput 
                                style={[style.TextInput]}
                                autoCapitalize={true} 
                                value={TaskText} 
                                onChangeText={(text)=>{setTaskText(text)}}
                                onEndEditing={()=>{
                                    if(TaskText.length>0)
                                        {props?.listChanger(Text, TaskText)}
                                        setVisible(false)
                                        props?.toggleEdit(false);
                                }} autoFocus={true} />)
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
    TextInput:{ 
    textAlign:'center',
    color:'#60BCFF',
    marginTop:-15,
    marginLeft:2
    }

});




export default Task;