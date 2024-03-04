import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Terceiro from "./components/Terceiro";


export default () => {

    return(
             <View style ={style.App}>
                <Text style={style.texto}>Tela principal</Text>
                <Terceiro/>
            </View>
    )
};

const style = StyleSheet.create(
    {
        App:{
            flex: 1,
            padding: 24,
            backgroundColor: '#4B0082',
        },
        texto:{
            backgroundColor:"#800000",
            color:"#ffff",
            padding: 20,
            fontSize: 50,
        }
    }
);