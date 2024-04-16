import React from "react";
import { SafeAreaView } from "react-native"

import CardScreen from "./Components/CardScreen";
import ListScreen from "./Components/ListScreen";

const vasco = "vasco"
export default props => {
    
    return(
        <SafeAreaView style={{flex:1}}>
                {/*<CardScreen/>*/}
                <ListScreen titulo={vasco}/>
        </SafeAreaView>

    )
}