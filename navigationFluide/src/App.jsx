import React from "react";
import { SafeAreaView} from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

import Home from "./navigation/Home";
import Profile from "./views/Profile";
import Settings from "./views/Settings";



export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerShown:false}}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="Profile" component={Profile}/>
                    <Stack.Screen name="Settings" component={Settings}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
        
    )
}