import React from "react";
import { SafeAreaView } from "react-native";

import Login from "./views/Login";
import InfoHome from "./views/InfoHome";
import HelloUser from "./views/HelloUser";

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <HelloUser/>
        </SafeAreaView>
    )
}