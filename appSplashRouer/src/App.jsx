import React from "react";
import { SafeAreaView} from "react-native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator()


import Splash from "./views/Splash";
import Login from "./views/Login";
import Drawer from "./routers/Drawer";
import Home from "./views/Home";




export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splah" component={Splash}/>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="Home" component={Home}/>
                    
                    
            
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
    )
}