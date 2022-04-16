import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';
import React, {useState} from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([])
  const [txt, setTxt] = useState('')

  const handleAddTask =()=>{
    setTaskList([...taskList,{data:txt.trim(),id:taskList.length +1}])
    setTxt('')
    console.log(taskList)
  }

  const DeleteTask = (id)=>{
   const data = taskList.filter((tsk) => tsk.id !== id)
   setTaskList(data)
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.sectionTitle}> Today's tasks</Text>
        <ScrollView style={styles.items}>
          {taskList.map((tsk) =>(
            <TouchableOpacity onPress={() =>DeleteTask(tsk.id)}>
            <Task text={tsk.data} key={tsk.id}/>
            </TouchableOpacity>
            
          ))}
          
          
          {/* <Task text={"test"}/>
          <Task text={"test"}/> */}
        </ScrollView>
      </View>
      <KeyboardAvoidingView 
       behavior={Platform.OS === 'ios' ? 'padding' :'height'}
       style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} placeholder={"write a text"} value={txt} onChangeText={text=>setTxt(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addWrapper}>
         <Text style={styles.addText}>+</Text>
       </View>
         </TouchableOpacity>
       
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55BCF6',
    
  },
  wrapper:{
    paddingTop:94,
    paddingHorizontal:20,

    
  },
  sectionTitle:{
   fontFamily:'Roboto',
   fontSize:24,lineHeight:28,
   marginBottom:20,
    

  },
  items:{
    
  },
  writeTaskWrapper:{
   position:'absolute',
   bottom:20,
   width:'100%',
   flexDirection:'row',
   justifyContent:'space-between',
   alignItems:'center',
   paddingHorizontal:20
  },input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:300,
    height:50,
  },addWrapper:{
    width:50,
    height:50,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0c0c0',
    borderWidth:1,
  }
});
