import React from "react";
import { } from "react-native";


export default props =>{

    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: props.corFundo || "FFC94A"
        }}>
            <Text style={{
                fontSize: 50,
                color: props.corTexto || '453F78'
            }}>
                {props.children}
            </Text>
        </View>
    )
}