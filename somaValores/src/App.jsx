import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styleSoma from "./styleSoma";
import SomaValores from "./components/SomaValores";
import EntradaText from "./components/EntradaText";


export default () => {

    return(
        <View style={style.fundo}>

                <EntradaText/>
              {/*  <Text style={styleSoma.textG}>Soma Valor</Text>
                    <SomaValores num1={300} num2={400}/>*/}
            
            
        </View>

    )
}

const style = StyleSheet.create(
    {
        fundo:{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
            /*backgroundColor: "#1C1C1C"*/
        },
        titulo:{
            fontSize: 40,
            color: "#FFFF00"
        }
    }
    
)