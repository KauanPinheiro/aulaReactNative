import React from "react";
import { FlatList, StyleSheet, View,Text } from "react-native";
import { } from "@rneui/themed";

import Usuario from "../components/Usuarios";

export default props => {

    return(
        <View style={style.body}>
            <Usuario/>    
        </View>
            


    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#797BEC",
            flex:1
        }
    }
)