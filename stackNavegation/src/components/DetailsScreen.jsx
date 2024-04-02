import React from "react";
import { Button, Text, View } from "react-native";

export default props=>{

    
    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#481E14"
        }}>
            <Text style={{fontSize:50}}>Details Screen</Text>

            <Button
            title="Vá para produtos"
            onPress={()=> props.navigation.navigate("Products")}
            />
        

        </View>
    )
}