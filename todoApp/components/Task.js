import React, { useState } from 'react'

import { View, StyleSheet, Text, TextInput, Alert, TouchableOpacity  } from 'react-native'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Task = ( props ) =>{
    
    const [Text, setText]= useState(props.name);
    const iniText = props.name;
    const [editedTaskText, seteditedTaskText]= useState('');
    
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
                            isChecked={props?.doneStat}
                            onPress={()=>{ 
                                props?.listRemover(Text);
                                props?.toggleRemove(false)
                                if(props?.listChanger()){setVisible(true)}
                                props?.toggleDone(Text);
                            }}

                            /> 
                            {Visible && (<TextInput 
                                style={[style.TextInput]}
                                autoCapitalize={true} 
                                value={editedTaskText} 
                                onChangeText={(text)=>{
                                    if(props?.listChanger()){
                                    seteditedTaskText(text)
                                    setText(text)}
                                }}
                            
                                onEndEditing={()=>{
                                    if(editedTaskText.length === 0){
                                        setText(props.name)
                                    }
                                    if(editedTaskText.length>0)
                                        {props?.listChanger(iniText, editedTaskText)}
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
    marginLeft:2,
    display:'none'
    }

});




export default Task;