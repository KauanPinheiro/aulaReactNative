import React from "react";
import {View,SafeAreaView } from "react-native"

import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <LoginScreen/>
        </SafeAreaView>
    )
}