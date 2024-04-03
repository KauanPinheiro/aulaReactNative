import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default props => {

    return(
        <View style={style.body}>
            <Pressable style={style.pressable}>
                <Text style={style.textG}>Paris</Text>
                <Text>France</Text>
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
            borderBottomWidth:1,
            borderColor:"#FDA403",
         
        },
        textG:{
            fontSize:20,
            color:"#222831",
        }
    }
)