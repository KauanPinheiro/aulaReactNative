import React from "react";
import {SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import Share from "./components/Share";
import Favorite from "./components/Favorite";

const Tab = createBottomTabNavigator()

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={
                        ({route}) => (
                            {
                                tabBarIcon: ({focused,color,size}) => {
                                    let iconName

                                    if (route.name === "Home") {
                                        iconName = focused 
                                        ? 'home'
                                        : 'home-outline'
                                    }
                                    else if (route.name === "Settings") {
                                        iconName = focused 
                                        ? 'settings'
                                        : 'settings-outline'
                                    }
                                    else if (route.name === "Share") {
                                        iconName = focused 
                                        ? 'share'
                                        : 'share-outline'
                                    }
                                    else if (route.name === "Favorite") {
                                        iconName = focused 
                                        ? 'heart'
                                        : 'heart-outline'
                                    }

                                    return <Icon name={iconName} size={size} color={color}/>

                                },
                                tabBarActiveTintColor:"#D862BC",
                                tabBarInactiveTintColor:"gray",
                            }
                        )
                    }
                >
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Settings" component={SettingsScreen}/>
                    <Tab.Screen name="Share" component={Share}/>
                    <Tab.Screen name="Favorite" component={Favorite}/>
                </Tab.Navigator>
            </NavigationContainer>
            <Text>Navigation Container</Text>

        </SafeAreaView>
    )
}