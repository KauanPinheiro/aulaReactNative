import React from "react";
import { Text, View } from "react-native";

export default props=>{

    
    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#453F78"
        }}>
            <Text style={{fontSize:50}}>About</Text>

            <Text style={{
                fontSize:15,
                color: "#FFC94A"
            
            }}>Parabéns você aprendeu a navegar ;)</Text>

        </View>
    )
}