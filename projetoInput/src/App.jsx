import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import EntradaInput from "./Components/EntradaInput";


export default () => {

    return(
        <SafeAreaView style={style.fundo}>
            <EntradaInput></EntradaInput>
        </SafeAreaView>
    )
}

const style = StyleSheet.create(
    {
        fundo:{
            flexGrow: 1,
            justifyContent:"center",
            alignItems: "center"

        }
    }
)