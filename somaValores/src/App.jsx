import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styleSoma from "./styleSoma";
import SomaValores from "./components/SomaValores";



export default () => {

    return(
        <View style={style.fundo}>

                <Text style={styleSoma.textG}>Soma Valor</Text>

            <SomaValores valor={100}/>
            <SomaValores valor={200}/>
            
        </View>

    )
}

const style = StyleSheet.create(
    {
        fundo:{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1C1C1C"
        }
    }
    
)