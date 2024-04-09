import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import ChatScreen from "./components/ChatScreen";


const Tab = createBottomTabNavigator()

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={
                        ({router}) => (
                            {
                                tabBarIcon: ({focused,color,size}) => {
                                    let iconName
                                    
                                    if (router === "WhatsApp"){
                                        iconName = focused
                                        ? 'chatbubbles'
                                        : 'chatbubbles-outline'                    
                                    }
                                    
                                    return <Icon name={iconName} size={size} color={color}/>
                                },
                                tabBarActiveTintColor:"#A3FFD6",
                                tabBarInactiveTintColor:"gray"

                            }
                        )
                    }
                >
                    <Tab.Screen name="WhatsApp" component={ChatScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}
