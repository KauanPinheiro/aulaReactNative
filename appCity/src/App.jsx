
import React from "react";
import { SafeAreaView, Text} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import GetCity from "./Components/GetCity";
import Cities from "./Components/Cities";
import ProfileCity from "./Components/ProfileCity";
import InfoCity from "./Components/InfoCity";

const stack = createNativeStackNavigator();

export default props => {

    return(
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>
                <stack.Navigator>
                    <stack.Screen name="Home" component={GetCity} />
                    <stack.Screen name="Cities" component={Cities} />
                    <stack.Screen name="City" component={ProfileCity}/>
                    <stack.Screen name="Info" component={InfoCity} />
                </stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}