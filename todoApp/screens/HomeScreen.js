import {React, useState, useEffect} from 'react'
import { View, Text, Pressable, Image, StyleSheet, Button, Alert } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Day from '../components/Day'
import Task from '../components/Task'
import TButtons from '../components/TButtons'  
import TDTools from '../components/TDTools';


const storeData = async (Key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(Key, jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async (key) => {
  // get Data from Storage
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      //  console.log(data);
      return JSON.parse(data);
    }
  } catch (error) {
    console.log(error);
  }
};



const HomeScreen = ({ navigation })=>{
    let i = 0;
    let added= false;


    let [List, setList] = useState([]);
    const [TaskText, setTaskText] = useState('');
    const [ToggleEdit, setToggleEdit] = useState(false);
    const [ToggleRemove, setToggleRemove] = useState(false);
    let [Deleted, setDeleted] = useState([]);

    
    useEffect(() => {
      

      const promise = getData('@storedList');
      promise.then((arr)=>{if(List.length===0 && typeof(arr) === "object" ){
        console.log(typeof(arr))
        setList(arr); added=true}})
      
      const deletedPromise = getData('@deletedList');
      deletedPromise.then((deleted)=>{if(Deleted.length===0 && typeof(deleted) === "object"){setDeleted(deleted); added=true}})
      
    }, [added])
    
    
    const finished = (taskName) =>{
      if(ToggleEdit === false && List.indexOf(taskName) !== -1){
        List[List.indexOf(taskName)][1] = !List[List.indexOf(taskName)][1];
        storeData('@storedList', List)
      }
    }

    
    
    let newList=[];

    const removeTask = taskName =>{
      if(List.indexOf(taskName)!==-1 && ToggleRemove === true){
        setDeleted(Deleted.concat(List.splice(List.indexOf(taskName), 1)));
        // console.log(Deleted)
        newList= [...List];
        setList(newList)
        storeData('@storedList', newList)
      }
    }


    let editedList =[];
    const EditTask = (taskName, newText) =>{
     
        if(ToggleEdit === true){    
          List[List.indexOf(taskName)] = [newText, false];
          console.log(List);
          editedList = [...List]
          setList(editedList);
          storeData('@storedList', editedList)
        }

          return ToggleEdit
    }

    return(
    <View style={[[style.container]]}>
      
      <View style={{flexDirection:'row', width:'100%', justifyContent:'space-evenly', alignItems:'center'}}>
        
        <Text style={{opacity:0}}>tttttt</Text>
        <Day></Day>
        <Pressable onPress={()=>{navigation.navigate("History", { Deleted }) }}  style={{marginLeft:25, marginRight:-10}}>
          <Image source={require('../images/History.png')} />
        </Pressable> 

      </View>

      
      <TDTools toggleRemove={setToggleRemove} toggleEdit={setToggleEdit}></TDTools>
      
      <ScrollView style={{height:440}} contentContainerStyle={{flexDirection:'column-reverse', justifyContent:'flex-end', alignItems:'flex-start'}}>
        {List.length==0 &&<Text style={[style.Msg]}>Add your first task!</Text>}
        {
          
      
        List.map(function(item){
          let i = 0;
          
          return (
                  <Task name={item} 
                                   listChanger={EditTask} 
                                   listRemover={removeTask} 
                                   toggleRemove={setToggleRemove} 
                                   toggleEdit={setToggleEdit}
                                   toggleDone={finished}
                                   doneStat={item[1]}
                                   key={item+' '+i}></Task>)
        })
        
        }
      
      </ScrollView>


      <View style={{flexDirection:'row', marginTop:25}}>
        <TextInput placeholder='Do the Dishes...' placeholderTextColor="#60BCFF"  style={[[style.TextInput]]} 
        autoCapitalize={true} 
        value={TaskText} 
        onChangeText={(text)=>{setTaskText(text)}} />

        <TButtons img="+" onPress={()=>{
            if(TaskText.length > 0){
              setTaskText('');
              List.push([TaskText, false])
              setList(List)
              storeData('@storedList', List)
              // console.log(List.concat(TaskText))
            } 
          }}/>
      </View>
          


    </View>
  );
};

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
