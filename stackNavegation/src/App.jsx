import React from "react";
import { SafeAreaView, Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/HomeScreen";
import DetailsScreen from "./components/DetailsScreen";
import Products from "./components/Products";
import About from "./components/About";

const stack = createNativeStackNavigator()

export default props =>{

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <stack.Navigator initialRouteName="Home">
                    <stack.Screen name="Home" component={HomeScreen} options={{title: 'Início'}}/>
                    <stack.Screen name="Details" component={DetailsScreen} options={{title:"Detalhes"}}/>
                    <stack.Screen name="Products" component={Products} options={{title:"Produtos"}}/>
                    <stack.Screen name="About" component={About} options={{title:"Sobre"}}/>
                </stack.Navigator>
                    <Text>App</Text>
            </NavigationContainer>
        </SafeAreaView>
    )
}