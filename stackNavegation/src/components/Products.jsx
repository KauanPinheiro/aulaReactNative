import React from "react";
import { Button, Text, View } from "react-native";

export default props=>{

    
    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "FF9800"
        }}>
            <Text style={{fontSize:50}}>Products</Text>

            <Button
            title="Vá para sobre"
            onPress={()=> props.navigation.navigate('About')}
            />

        </View>
    )
}