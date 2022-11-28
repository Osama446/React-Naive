import {React, useState} from 'react'
import { View, Text, Pressable, Image, StyleSheet, Button, Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';


import Day from '../components/Day'
import Task from '../components/Task'
import TButtons from '../components/TButtons'  
import TDTools from '../components/TDTools';




const HomeScreen = ({ navigation, props })=>{
  let i = 0;
  const [TaskText, setTaskText] = useState('');
  var date = new Date(),
	  weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')
    let [List, setList] = useState([]);

    let day = weekday[date.getDay()]
    return(
      
    <View style={[[style.container]]}>
      <View style={{flexDirection:'row', width:'100%', justifyContent:'space-evenly', alignItems:'center'}}>
        <Text style={{opacity:0}}>tttttt</Text>
        <Day name={day}></Day>
        <Pressable onPress={()=>{navigation.navigate("History")}} style={{marginLeft:25, marginRight:-10}}>
          <Image source={require('../images/History.png')} />
        </Pressable>       
      </View>

      
      <TDTools></TDTools>
      



      <ScrollView style={{height:440}}>
        {List.length==0 &&<Text style={[style.Msg]}>Add your first task!</Text>}
        {
        List.map(function(item){
          i++;
          return <Task name={item} key={item+' '+i}></Task>
        })
        }
      
      </ScrollView>
      <View style={{flexDirection:'row', marginTop:25}}>
        <TextInput placeholder='Do the Dishes...' placeholderTextColor="#60BCFF"  style={[[style.TextInput]]} autoCapitalize={true} value={TaskText} onChangeText={(text)=>{
          setTaskText(text)
        }} />
        <TButtons img="+" onPress={(text)=>{
            if(TaskText.length > 0)
              setList(List.concat(TaskText))
              setTaskText('')
          }}>

        </TButtons>
      </View>
      

    </View>
  );};

  const style = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        alignItems:'center'
    },
    TextInput:{
      borderColor:'#60BCFF',
      borderWidth:1,
      borderRadius:27,
      width:200,
      color:'#60BCFF',
      paddingLeft:20,
      fontFamily:'Sf Pro',
      width:300,
      height:61
    },
    Msg:{
      color:'#60BCFF',
      fontFamily:'Sf Pro',
      fontSize:16,
      fontWeight:'600'
    }
    
  });



  export default HomeScreen;
