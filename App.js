import React,{useState} from 'react';
import {Keyboard,View,Text,StyleSheet,TextInput,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import Task from './components/Task';

export default function App(){
  const [task,setTask] = useState();
  const [taskItems,setTaskItems] = useState([]);

  const completeTask = (index) =>{
    let itemsCopy=[...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  const handleAddTask =() =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  return(
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
            {
              taskItems.map((item , index)=>{
              return(
              <TouchableOpacity key={index} onPress={()=> completeTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
              
              );
            })
            }
        </View>
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios"?"padding":"height"}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Task'}
        value={task}
        onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
        </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  items:{
    marginTop: 30
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#C0C0C0'
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C0C0C0'
  },
  addText:{
      fontSize: 20,
      color: 'black'
  }
})