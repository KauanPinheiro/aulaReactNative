import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";



export default () => {

    return(

        <SafeAreaView style={style.body}>
            {/*<Login/>*/}
            <Cadastro/>
        </SafeAreaView>

    )
}

const style = StyleSheet.create(
    {
        body:{
            flexGrow: 1,
            backgroundColor: "#fff "
        }
    }
)