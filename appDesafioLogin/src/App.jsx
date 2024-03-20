import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";


export default () => {

    return(
        <SafeAreaView style={styleApp.body}> 
            <Cadastro/>
            {/*
                <Login/>

            */}

        </SafeAreaView>
    )
}

const styleApp = StyleSheet.create(
    {
        body:{
            flexGrow: 1,
            backgroundColor: "#4F4F4F",
            justifyContent:"center",
            alignItems:'center',
        }
    }
)