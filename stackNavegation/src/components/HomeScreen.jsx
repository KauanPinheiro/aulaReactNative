import React from "react";
import { Button, Text, View } from "react-native";

export default props=>{

    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#86469C"
        }}>
            <Text style={{fontSize:50}}>Home Screen</Text>
    
            <Button
            title="Vá para detalhes"
            onPress={()=> props.navigation.navigate('Details')}
            />

        </View>
    )
}