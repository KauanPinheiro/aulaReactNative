import 'react-native-gesture-handler';

import React from "react";
import { SafeAreaView} from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Home from './Components/Home';
import Login from './Components/Login';


const Drawer = createDrawerNavigator();


export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={Home}/>
                    <Drawer.Screen name="Login" component={Login}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}