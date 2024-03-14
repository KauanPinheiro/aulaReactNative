import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./Components/Login";



export default () => {

    return(
        <SafeAreaView style={styleApp.body}>
            <Login/>
        </SafeAreaView>
    )
}

const styleApp = StyleSheet.create(
    {
        body:{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: 'center'
        }
    }
)