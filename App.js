import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React,{useState} from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';
import Reminders from "@wiicamp/react-native-reminders";


export default function App() {

  const [tasks,setTasks] = useState([
    {text:"Zeskanuj dokumenty",key:1},
    {text:"Zadzwoń do pani",key:2},
    {text:"Zadzwoń do Marcina",key:3},
  ])

  const pressHandler = (key) =>{
      setTasks((prevTodos)=>{
        return prevTodos.filter(todo => todo.key!=key)
      })
  };

  const submitHandler = (text) => {
    if(text.length>3){
      setTasks((prevTodos)=>{
        return [
          {text:text,key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else{
        Alert.alert("Błąd!","Zadanie ma za mało znaków",[
          {text:"TAK",onPress:()=>console.log("alert zamknięty")},
          {text:"OCZYWIŚCIE",onPress:()=>console.log("alert zamknięty")},
          {text:"JESZCZE JAK!",onPress:()=>console.log("alert zamknięty")},
        ]);
    }
   
  };

  return (
    // <Sandbox></Sandbox>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("yey,klawiatura już nie przeszkadza")
    }}>
        <View style={styles.container}>
      {/* nagłówek */}
      <Header title="Moje zadania"></Header>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
        {/* lista */}
        <View style={styles.list}>
            <FlatList data={tasks} renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
            )}></FlatList>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  content:{
    padding:40,
    // backgroundColor:"pink",
    flex:1
  },
  list:{
    marginTop:20,
    // backgroundColor:"yellow",
    flex:1
  }
});

// Request permission
Reminders.requestPermission();
 
// Get reminders
Reminders.getReminders();
 
// Add reminder
Reminders.addReminder({
  title: 'Wake-up reminder',
  note: 'Wake-up and have breakfast!',
  timestamp: Date.now() * 60000 * 5, // next five minutes from current time (milliseconds)
});
 
// Remove reminder
Reminders.removeReminder('the-reminder-id');