import * as React from 'react';
import { View} from "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

import Home from '../views/Home';
import Configuracao from '../views/Configuracao';
import Sobre from '../views/Sobre';

export default props => {

    return(
        <View style={{flex:1}}>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home}/>
                <Drawer.Screen name='Configuração' component={Configuracao}/>
                <Drawer.Screen name='Sobre' component={Sobre}/>
            </Drawer.Navigator>
        </View>
    )
}