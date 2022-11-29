import {React, useState} from 'react'

import { View, Pressable, Image, Alert } from 'react-native'

const Item = (props)=>{
    return (
    <Pressable style={{justifyContent:'center', alignItems:"center"}} onPress={props.onPress}>
            <Image source={require('../images/circle_sm.png')}></Image>
            <Image source={props.source} style={{position:'absolute'}}></Image>
    </Pressable>
    )
}

const TDTools = (props )=>{
    const [isShown, setIsShown] = useState(true);
    return (
        <View style={{alignItems:'center'}}>
            {isShown && (<View style={{marginTop:34, marginBottom:33}}>
                <Pressable onPress={()=>{
                setIsShown(false);
                }}>
                    <Image source={require('../images/ThreeDots.png')}/>
                </Pressable>
            </View>)}
            { !isShown && (
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:206, height:52, margin:15}}>
                
                <Item source={require(`../images/Edit.png`)} onPress={()=>{}}></Item>
                
                <Item source={require(`../images/Delete.png`)} onPress={()=>props?.stateChanger([])}></Item>

                <Item source={require(`../images/Arrow.png`)} onPress={()=>{
                    setIsShown(true);
                    }}></Item>
            </View>)}
        </View>
        
        )
} 



export default TDTools;