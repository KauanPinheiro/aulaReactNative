import React from "react";
import { View,Text, Pressable, StyleSheet} from "react-native"


export default props => {

    return(
        <View style={style.body}>
            <Text style={style.text}>Seja Bem-vindo(a)</Text>

            <Pressable style={style.button}>
                <Text style={style.textbtn}>Clique aqui para começar!</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#EEEEEE",
        },
        text:{
            fontSize:25,
            color:"#222831"
        },
        button:{
            alignItems:"center",
            justifyContent:"center",
            width:250,
            height:50,
            borderRadius:10,
            backgroundColor:"#0D9276",
            margin:10,
        },
        textbtn:{
            color:"#FFF",
            fontSize:16
        }
    }
)