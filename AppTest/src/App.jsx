import React from "react";
import { SafeAreaView } from "react-native";

import Array from "./components/Array";

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <Array/>    
        </SafeAreaView>
    )
}