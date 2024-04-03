import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default props => {

    return(
        <View style={style.body}>
            <Pressable style={style.containe1}>
                <Text style={style.text}>No location for this city!</Text>
            </Pressable>

            <Pressable style={style.button}>
                <Text style={style.textButton}>Location name</Text>
            </Pressable>

            <Pressable style={style.button}>
                <Text style={style.textButton}>Location info</Text>
            </Pressable>

            <Pressable style={style.button}>
                <Text style={style.textButton}>Add Location</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#EEEEEE"
        },
        containe1:{
            margin:150,
        },
        text:{
            color:"#222831",
            fontSize: 25,
            width:400,
            textAlign: 'center',
            padding:10,
            borderBottomWidth:1,
            borderColor:"#FDA403",
        },
        button:{
            margin:5,
            width: 400,
            height: 50,
            borderRadius: 5,
            backgroundColor:'#FDA403',
            },
        textButton:{
                textAlign:"center",
                padding:15,
                color:'#FFF',
                fontSize:16,
                fontFamily:"Merriweather"
        }
    }
)