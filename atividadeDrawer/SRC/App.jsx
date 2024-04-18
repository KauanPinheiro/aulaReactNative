import React from "react";
import { View,SafeAreaView } from "react-native";


import Login from "./Components/Login";


export default param => {

    return(
        <SafeAreaView style={{flex:1}}>
            <Login/>
        </SafeAreaView> 
    )
}