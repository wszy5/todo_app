import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,

} from "react-native";

export default function Header(props){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        paddingVertical:38,
        backgroundColor:"coral"
    },
    title:{
        textAlign:"center",
        color:"white",
        marginTop:10,
        fontWeight:"bold",
        fontSize:26
    }
});