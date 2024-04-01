import React from "react";
import { } from "react-native";


export default props =>{

    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: props.corFundo || "E72929"
        }}>
            <Text style={{
                fontSize: 50,
                color: props.corTexto || 'FFE4CF'
            }}>
                {props.children}
            </Text>
        </View>
    )
}