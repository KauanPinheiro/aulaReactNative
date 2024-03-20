import React from "react";
import { Image, View } from "react-native";
import estilo from "./estilo";


export default props =>{

    return(
        <View>

            <View style={estilo.positionImg}>

                    <Image source={require('../img/count.png')} style={estilo.img} />

            </View>


        </View>
        
    )
}