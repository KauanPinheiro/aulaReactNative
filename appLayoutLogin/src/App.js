import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Login from "./Components/Login";



export default () => {

    return(

        <SafeAreaView style={style.body}>
            <Login/>
        </SafeAreaView>

    )
}

const style = StyleSheet.create(
    {
        body:{
            flexGrow: 1,
            backgroundColor: "#fff ",
            justifyContent: "center",
            alignItems: "center",
        }
    }
)