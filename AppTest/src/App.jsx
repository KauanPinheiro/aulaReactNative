import React from "react";
import { SafeAreaView } from "react-native";

import Array from "./components/Array";
import Productos from "./components/Productos";
import Filter from "./components/Filter";
import ProductosUseState from "./components/ProductosUseState";
import Reduce from "./components/Reduce";
import ProductosReduce from "./components/ProductosReduce";


export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <ProductosReduce/>    
        </SafeAreaView>
    )
}