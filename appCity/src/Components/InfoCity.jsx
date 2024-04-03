import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default props => {

    return(
        <View style={style.body}>
            <Pressable style={style.pressable}>
                <Text style={style.textG}>Sushi Sora</Text>
                <Text>Good sushi</Text>
            </Pressable>

            <Pressable style={style.pressable}>
                <Text style={style.textG}>MT Fuji</Text>
                <Text>Great sushi</Text>
            </Pressable>

            <Pressable style={style.pressable}>
                <Text style={style.textG}>DIver City Tokyo Plaza</Text>
                <Text>God fish</Text>
            </Pressable>

            <Pressable style={style.pressable}>
                <Text style={style.textG}>National Yoyogi Stadium</Text>
                <Text>Divine fish</Text>
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
            justifyContent: "flex-start",
            alignItems:"flex-start",
            backgroundColor:"#  EEEEEE"
        },
        pressable:{
            margin:15,
            height: 50,
            width:350,
            borderBottomWidth:4,
            borderColor:"#FDA403",
         
        },
        textG:{
            fontSize:20,
            color:"#222831",
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