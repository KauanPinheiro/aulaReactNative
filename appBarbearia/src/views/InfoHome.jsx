import React from "react";
import { StyleSheet, View } from "react-native";
import { } from "@rneui/themed";

import Listem from "../components/Listem";

export default props => {

    return(
        <View style={style.body}> 
            <Listem/>
        </View>
    )
}

const style = StyleSheet.create(
    {
        body:{
            backgroundColor:"#FFE6E6",
            flex:1,
            justifyContent:"center",
        }
    }
)