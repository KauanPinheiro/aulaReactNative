import React from "react";
import { View,SafeAreaView} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator();

import Feed from "../views/Feed";
import Menssagem from "../views/Menssagem";

export default props => {

    return(
        <SafeAreaView style={{flex:1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }}>
            <Tab.Navigator screenOptions={{headerShown:false}}>
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="Mensagem" component={Menssagem}/>
            </Tab.Navigator>
        </SafeAreaView>
    )
}