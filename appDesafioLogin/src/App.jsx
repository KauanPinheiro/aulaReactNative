import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./components/Login";



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
            backgroundColor: "#4F4F4F",
            justifyContent:"center",
            alignItems:'center',
        }
    }
)