import React from "react";
import { Button, Pressable, Text, View } from  "react-native";

export default props => {

    const names = ['Alan','Bernado','Carlos', 'Daniela']

    
    return(
        <View style={{
            flex:1,
            backgroundColor:"#FFF",
            alignItems:"center",
            justifyContent:"center"
        }}>
            {names.map( name => (
                <Text key={name}>{name}</Text>
            ))}
        </View>
    )
}