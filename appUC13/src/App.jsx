import React from "react";
import { SafeAreaView, StyleSheet, Text,Pressable} from "react-native"

import FoodList from "./views/FoodList";

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <FoodList/>
            <Pressable style={style.btn}>
                <Text style={style.textBtn}>Continuar</Text>      
              </Pressable>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        btn:{
            width:300,
            height:70,
            backgroundColor: "#4CB051",
            borderRadius: 10,
            position:"absolute",
            alignItems:"center",
            justifyContent:"center",
            marginBottom:0
        },
        textBtn:{
            textAlign:"center",
            fontSize:25,
            fontFamily: "Platypi",
            fontWeight: "bold",
            color: "#FFF"
        },

    }
)