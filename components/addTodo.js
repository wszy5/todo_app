import React,{useState} from 'react';
import {StyleSheet,Text,TextInput,Button, View} from 'react-native';

export default function AddTodo({submitHandler}){

    const [text,setText] = useState("");

    const changeHandler = (value) =>{
        setText(value);
    };

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder="nowe zadanie..."
                onChangeText={changeHandler}
            ></TextInput>
            <Button
                onPress={()=>submitHandler(text)}
                title="dodaj do listy"
                color="coral"
            ></Button>
        </View>
    );

}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    }
});
