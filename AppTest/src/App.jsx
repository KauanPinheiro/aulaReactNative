import React from "react";
import { SafeAreaView } from "react-native";

import Array from "./components/Array";
import Productos from "./components/Productos";


export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <Productos/>    
        </SafeAreaView>
    )
}