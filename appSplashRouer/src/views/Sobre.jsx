import React from "react";
import { View,Text} from "react-native";

export default props => {

    return(
        <View style={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#007F73",
        }}>

        <Text style={{
            color: "#FFF",
            fontSize:25
        }}>Configuração</Text>
        </View>
    )
}